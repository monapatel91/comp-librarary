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
      display: flex;
      flex-direction: column;
      justify-content: ${railItemPosition};
      padding: ${theme.spacing(1, 0, 0)};
      text-align: center;
      width: 72px;

      .rail-item-button {
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
          padding: ${theme.spacing(2, 0.5)};
          gap: ${theme.spacing(0.5)}px;
          word-break: break-word;
        }
      }
    }
  `}
`;
