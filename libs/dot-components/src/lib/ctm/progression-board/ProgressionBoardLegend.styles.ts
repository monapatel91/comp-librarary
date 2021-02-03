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
        span {
          &.split {
            &.improve,
            &.maintain {
              float: left;
              height: 20px;
              width: 20px;
              display: inline-block;
              background: linear-gradient(
                -45deg,
                #fff 0%,
                #fff 50%,
                currentColor 0%,
                currentColor 100%
              );
              border: 1px solid currentColor;
              border-radius: 50%;
            }

            &.improve {
              color: darken(#69be28, 15%);
            }

            &.maintain {
              color: darken(#b50200, 15%);
            }
          }

          &.improve,
          &.maintain {
            float: left;
            height: 20px;
            width: 20px;
            display: inline-block;
            background-color: currentColor;
            border: 1px solid currentColor;
            border-radius: 50%;
          }

          &.improve {
            color: darken(#69be28, 15%);
          }

          &.maintain {
            color: darken(#b50200, 15%);
          }

          &.unknown {
            float: left;
            height: 20px;
            width: 20px;
            display: inline-block;
            background-color: #b7bcc4;
            border-radius: 50%;
          }
        }

        li.item {
          padding: 5px;

          .title {
            padding: 5px;
          }
        }

        li.workitems {
          display: block;
          margin: 9px;
          line-height: 20px;

          .title {
            padding: 9px;
          }

          i {
            float: left;
            width: 20px;
            text-align: center;
            font-size: large;
          }
        }
      }
    }
  }
`;
