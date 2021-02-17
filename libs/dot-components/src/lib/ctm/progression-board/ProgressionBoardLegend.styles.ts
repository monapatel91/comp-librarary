import styled from 'styled-components';

export const rootClassName = 'dot-legend';

export const StyledProgressionLegend = styled.ul`
  &.${rootClassName} {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 516px;

    li {
      box-sizing: border-box;
      display: flex;
      line-height: 20px;
      list-style-type: none;
      margin: 4px;
      width: 48%;

      &.improve .dot-icon i {
        color: #59a121;
      }

      &.maintain .dot-icon i {
        color: #990100;
      }

      &.unknown .dot-icon i {
        color: #b7bcc4;
      }

      .dot-icon {
        display: inline-block;
        margin-right: 9px;

        i {
          &.icon-error-outlines {
            color: #d52101;
          }

          &.icon-error-solid {
            color: #005293;
          }

          &.icon-info-solid {
            color: #69be28;
          }

          &.icon-rogue-commits {
            color: #eaab00;
          }

          &.icon-file-dotted {
            color: #005293;
          }

          &.icon-pending-clock {
            color: #244451;
          }

          &.icon-check-solid {
            color: #00a9e0;
          }

          &.icon-thumbs-down {
            color: #6d09a8;
          }

          &.icon-lock {
            color: #d52101;
          }
        }
      }
    }
  }
`;
