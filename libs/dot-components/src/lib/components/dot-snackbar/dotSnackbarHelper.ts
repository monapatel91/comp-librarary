export function addAutoHideDuration(severity: string): number | null {
  if (severity === 'error') {
    return null;
  }
  return 10000;
}
