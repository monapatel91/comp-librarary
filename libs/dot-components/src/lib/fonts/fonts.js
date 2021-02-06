import { createGlobalStyle } from 'styled-components';

import LatoRegular from './Lato-Regular.woff';
import LatoBold from './Lato-Bold.woff';
import Dot from './dot.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    src: url(${LatoRegular}) format('woff');
  }

  @font-face {
    font-family: 'LatoBold';
    font-weight: 700;
    src: url(${LatoBold}) format('woff');
  }

  @font-face {
    font-display: block;
    font-family: 'dot';
    src: url(${Dot}) format('woff');
  }
`;
