export function useStylesWithRootClass(
  name: string,
  className?: string,
  ...args: string[]
) {
  // combine the root classes into one string
  return [name, ...(className ? [className] : [])]
    .concat(args)
    .join(' ')
    .trim();
}
