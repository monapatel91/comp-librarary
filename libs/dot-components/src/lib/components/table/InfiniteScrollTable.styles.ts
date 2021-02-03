import styled, { css } from 'styled-components';

export const rootClassName = 'dot-infinite-scroll';
export const rootFooterClassName = 'dot-infinite-footer';

export const StyledInfiniteScroll = styled.div`
  &.infinite-scroll-container {
    height: calc(100% - 36px); /* used to account for the footer */
    overflow: hidden;
    width: 100%;

    .infinite-scroll-table-row {
      border-top: 1px solid #ccc;
    }

    .ReactVirtualized__Table__headerRow {
      background: #eee;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-family: 'LatoBold', sans-serif;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
    }

    .ReactVirtualized__Table__row {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
    }

    .ReactVirtualized__Table__headerTruncatedText {
      display: inline-block;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .ReactVirtualized__Table__headerColumn,
    .ReactVirtualized__Table__rowColumn {
      margin-right: 10px;
      min-width: 0px;
      &:first-of-type {
        margin-left: 10px;
      }
    }
    .ReactVirtualized__Table__rowColumn {
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .ReactVirtualized__Table__sortableHeaderColumn {
      cursor: pointer;
    }

    .ReactVirtualized__Table__sortableHeaderIconContainer {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    .ReactVirtualized__Table__sortableHeaderIcon {
      -webkit-box-flex: 0;
      flex: 0 0 24px;
      height: 1em;
      width: 1em;
      fill: currentColor;
    }
  }
`;

export const StyledInfiniteScrollFooter = styled.div`
  ${({ theme }) => css`
    &.dot-infinite-footer {
      border-top: 1px solid #ccc;
      padding: ${theme.spacing(1)}px;
      position: relative;
      text-align: right;
    }
  `}
`;
