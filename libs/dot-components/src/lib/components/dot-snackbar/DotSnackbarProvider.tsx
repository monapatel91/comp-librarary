import React from 'react';

const initialState = [
  { message: '', open: false, severity: 'success', id: '' },
];

interface ProviderProps {
  children: React.ReactNode;
}

type Severity = 'success' | 'warning' | 'info' | 'error';

interface SnackbarProps {
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

const SnackbarContext = React.createContext<SnackbarProps>({
  alerts: [],
  enqueueMessage: (message: string, severity: Severity) => null,
  removeMessage: (id: string) => null,
});

export const SnackbarProvider = ({ children }: ProviderProps) => {
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

  const snackbarValues = {
    alerts,
    enqueueMessage,
    removeMessage,
  };

  const memoizedValues = React.useMemo(() => snackbarValues, [alerts]);

  return (
    <SnackbarContext.Provider value={memoizedValues}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => {
  return React.useContext(SnackbarContext);
};
