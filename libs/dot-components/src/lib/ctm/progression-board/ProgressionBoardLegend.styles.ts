import styled from 'styled-components';

export const rootClassName = 'legend-columns';

export const StyledProgressionLegend = styled.div`
  &.legend-columns {
    display: flex;

    .legend-column {
      display: flex;
      flex-flow: column;
      vertical-align: top;
      width: 258px;

      ul.legends {
        li.workitems {
          display: block;
          margin: 9px;
          line-height: 20px;

          & > span:first-of-type {
            float: left;
            height: 20px;
            width: 20px;

            &:not(.dot-icon) {
              background: currentColor;
              border: 1px solid currentColor;
              border-radius: 50%;

              &.improve {
                background: #59a121;
                border-color: #59a121;
                &.split {
                  background: linear-gradient(
                    -45deg,
                    #fff 0%,
                    #fff 50%,
                    #59a121 0%,
                    #59a121 100%
                  );
                }
              }

              &.maintain {
                background: #990100;
                border-color: #990100;
                &.split {
                  background: linear-gradient(
                    -45deg,
                    #fff 0%,
                    #fff 50%,
                    #990100 0%,
                    #990100 100%
                  );
                }
              }

              &.unknown {
                background: #b7bcc4;
                border: none;
              }
            }
          }

          .title {
            padding: 9px;
          }

          .dot-icon {
            display: inline-block;

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
    }
  }
`;
