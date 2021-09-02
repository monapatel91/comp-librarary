export const compareWidth = (
  parentEl: Element | HTMLElement,
  childEl: Element | HTMLElement
) => {
  return (
    parentEl.getBoundingClientRect().width <
    childEl.getBoundingClientRect().width
  );
};
