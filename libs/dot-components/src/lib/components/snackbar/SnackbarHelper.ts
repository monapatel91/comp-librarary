import { SnackbarSeverity } from './Snackbar';

export function addAutoHideDuration(severity: SnackbarSeverity): number | null {
  return severity === 'error' ? null : 10000;
}
