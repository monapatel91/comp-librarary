import { useState, useEffect } from 'react';

export const useDelay = (
  delay: number | undefined,
  watcherProps: any,
  setFunc
) => {
  const [state, setState] = useState(true);
  useEffect(() => {
    if (delay && watcherProps) {
      const delayTimer = setTimeout(() => {
        setState(false);
        setFunc(false);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  });
  return state;
};
