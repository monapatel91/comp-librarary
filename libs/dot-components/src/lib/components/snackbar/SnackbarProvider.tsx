import React, {
  createContext,
  useMemo,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { DotSnackbarContainer } from './SnackbarContainer';
import { SnackbarSeverity } from './Snackbar';
import { CreateUUID } from '../createUUID';

const initialState = [
  { message: '', open: false, severity: 'success', id: '' },
];

interface DotSnackbarProps {
  alerts: typeof initialState;
  enqueueMessage: (message: string, severity: SnackbarSeverity) => void;
  removeMessage: (id: string) => void;
}

const DotSnackbarContext = createContext<DotSnackbarProps>({
  alerts: [],
  enqueueMessage: (_message: string, _severity: SnackbarSeverity) => null,
  removeMessage: (_id: string) => null,
});

export const DotSnackbarProvider = (children: ReactNode) => {
  const [alerts, setAlerts] = useState<typeof initialState>([]);

  function enqueueMessage(message: string, severity: SnackbarSeverity): void {
    const id = CreateUUID();
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

  const memoizedValues = useMemo(() => DotSnackbarValues, [alerts]);

  return (
    <DotSnackbarContext.Provider value={memoizedValues}>
      <DotSnackbarContainer />
      {children}
    </DotSnackbarContext.Provider>
  );
};

export const useDotSnackbarContext = () => {
  return useContext(DotSnackbarContext);
};
