export const compareWidth = (
  parentEl: Element | HTMLElement,
  childEl: Element | HTMLElement
) => {
  const parentWidth = parentEl.getBoundingClientRect().width;
  const childWidth = childEl.getBoundingClientRect().width;

  return parentWidth < childWidth;
};
