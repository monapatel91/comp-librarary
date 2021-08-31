export const compareWidth = (
  parentEl: Element | HTMLElement,
  childEl: Element | HTMLElement
) => {
  const parentWidth = parentEl?.getBoundingClientRect().width;
  const childWidth = childEl?.getBoundingClientRect().width;

  return parentWidth < childWidth;
};

export const compareWidthHeight = (
  parentEl: Element | HTMLElement,
  childEl: Element | HTMLElement
) => {
  const parentHeight = parentEl?.getBoundingClientRect().height;
  const parentWidth = parentEl?.getBoundingClientRect().width;
  const childHeight = childEl?.getBoundingClientRect().height;
  const childWidth = childEl?.getBoundingClientRect().width;

  return parentWidth < childWidth || parentHeight < childHeight;
};
