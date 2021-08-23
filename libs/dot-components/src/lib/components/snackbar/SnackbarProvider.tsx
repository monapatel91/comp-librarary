import React, {
  createContext,
  useMemo,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { CreateUUID } from '../createUUID';
import { DotSnackbar, SnackbarSeverity } from './Snackbar';
import {
  StyledSnackbarContainer,
  rootClassName,
} from './SnackbarContainer.styles';

const initialState = [
  { message: '', open: false, severity: 'success', id: '' },
];

interface SnackbarProviderProps {
  /** The components or string that load inside of the snackbar provider. */
  children: ReactNode;
}

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

export const DotSnackbarContainer = () => {
  const { alerts, removeMessage } = useDotSnackbarContext();

  function handleClose(id: string): () => void {
    return () => {
      removeMessage(id);
    };
  }

  return (
    <StyledSnackbarContainer className={rootClassName}>
      <div data-testid={rootClassName} className={rootClassName}>
        {alerts
          .slice()
          .reverse()
          .map((alert) => {
            return (
              <DotSnackbar
                key={alert.id}
                severity={alert.severity as SnackbarSeverity}
                onClose={handleClose(alert.id)}
                open={alert.open}
              >
                {alert.message}
              </DotSnackbar>
            );
          })}
      </div>
    </StyledSnackbarContainer>
  );
};

export const DotSnackbarProvider = ({ children }: SnackbarProviderProps) => {
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
