import styled, { css } from 'styled-components';
import { RailItemsPosition } from './NavigationRail';

export const rootClassName = 'dot-navigation-rail';

export interface StyledNavigationRailType {
  railItemPosition: RailItemsPosition;
}

export const StyledNavigationRail = styled.div<StyledNavigationRailType>`
  ${({ theme, railItemPosition }) => css`
    &.${rootClassName} {
      background-color: ${theme.palette.layer.n50};
      border-left: 1px solid ${theme.palette.layer.n100};
      display: flex;
      flex-direction: column;
      justify-content: ${railItemPosition};
      padding: ${theme.spacing(1, 0, 0)};
      width: 72px;

      .rail-item-button {
        flex-basis: 72px;
        border-radius: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        white-space: normal;

        &.selected {
          background-color: ${theme.palette.layer.n0};
        }

        .MuiButton-label {
          display: flex;
          flex-direction: column;
          word-break: break-word;
        }
      }
    }
  `}
`;
