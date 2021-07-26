import React from 'react';
import { DotSnackbarContainer } from './DotSnackbarContainer';

const initialState = [
  { message: '', open: false, severity: 'success', id: '' },
];

interface DotSnackbarProviderProps {
  children: React.ReactNode;
}

type Severity = 'success' | 'warning' | 'info' | 'error';

interface DotSnackbarProps {
  alerts: typeof initialState;
  enqueueMessage: (message: string, severity: Severity) => void;
  removeMessage: (id: string) => void;
}

const generateId = (): number => {
  const date = new Date().getTime().toString();
  return date.split('').reduce((acc: number, cur: string): number => {
    const index = Math.floor(Math.random() * 13);
    const value = date[index];
    return (acc = value.charCodeAt(0) + (acc << 6) + (acc << 16) - acc);
  }, 0);
};

const DotSnackbarContext = React.createContext<DotSnackbarProps>({
  alerts: [],
  enqueueMessage: (message: string, severity: Severity) => null,
  removeMessage: (id: string) => null,
});

export const DotSnackbarProvider = ({ children }: DotSnackbarProviderProps) => {
  const [alerts, setAlerts] = React.useState<typeof initialState>([]);

  function enqueueMessage(message: string, severity: Severity): void {
    const id = generateId().toString();
    const queue = { id, message, severity, open: true };

    setAlerts((prevState) => {
      return [...prevState, { ...queue }];
    });
  }

  const removeMessage = (id: string) => {
    setAlerts((prev) => {
      return prev.map((a) => {
        return a.id === id ? { ...a, open: false } : a;
      });
    });
  };

  const DotSnackbarValues = {
    alerts,
    enqueueMessage,
    removeMessage,
  };

  const memoizedValues = React.useMemo(() => DotSnackbarValues, [alerts]);

  return (
    <DotSnackbarContext.Provider value={memoizedValues}>
      <DotSnackbarContainer />
      {children}
    </DotSnackbarContext.Provider>
  );
};

export const useDotSnackbarContext = () => {
  return React.useContext(DotSnackbarContext);
};
