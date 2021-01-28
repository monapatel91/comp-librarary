export function useStylesWithRootClass(
  name: string,
  className?: string, 
  ...args: string[])
  {
  // combine the root classes into one string
  const rootClasses = [name, ...(className ? [className] : [])].concat(args)
  .join(' ')
  .trim();

  return rootClasses;
}
