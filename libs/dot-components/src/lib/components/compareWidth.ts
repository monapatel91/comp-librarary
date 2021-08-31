export const compareWidth = (parentEl: HTMLElement, childEl: HTMLElement) => {
  const parentWidth = parentEl?.getBoundingClientRect().width;
  const childWidth = childEl?.getBoundingClientRect().width;

  return parentWidth < childWidth;
};

export const compareWidthHeight = (
  parentEl: HTMLElement,
  childEl: HTMLElement
) => {
  const parentHeight = parentEl?.getBoundingClientRect().height;
  const parentWidth = parentEl?.getBoundingClientRect().width;
  const childHeight = childEl?.getBoundingClientRect().height;
  const childWidth = childEl?.getBoundingClientRect().width;

  return parentWidth < childWidth || parentHeight < childHeight;
};
