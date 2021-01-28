import { CommonProps } from '../CommonProps';

export type DotActionBarVarient = 'regular' | 'dense';

export interface DotActionBarProps extends CommonProps {
  /** string or JSX element that is displayed inside the toolbar */
  children?: string | JSX.Element | JSX.Element[];
  /** DotActionBarVarient dense and regular for toolbar height */
  variant?: DotActionBarVarient;
}
