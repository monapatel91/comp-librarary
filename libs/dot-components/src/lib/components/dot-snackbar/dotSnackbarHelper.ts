export function addAutoHideDuration(severity: string): number | null {
  return severity === 'error' ? null : 10000;
}
