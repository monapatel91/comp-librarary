export function useStylesWithRootClass(name: string, className?: string) {
  // combine the root classes into one string
  const rootClasses = [name, ...(className ? [className] : [])].join(' ');

  return rootClasses;
}
