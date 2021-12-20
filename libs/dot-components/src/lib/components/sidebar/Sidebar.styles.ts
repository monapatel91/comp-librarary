import styled, { css } from 'styled-components';
import { listItemRootClass, nestedDrawerClassName } from '../list/List.styles';

export const rootClassName = 'dot-sidebar';

export const StyledSidebar = styled.aside`
  ${({ theme }) => css`
    &.${rootClassName} {
      align-items: stretch;
      background: ${theme.palette.product === 'agility'
        ? theme.palette.layer.n50
        : theme.palette.grey[50]};
      border-width: 0 1px;
      border-style: solid;
      border-color: ${theme.palette.product === 'agility'
        ? theme.palette.agilityInterface.sideNavBorder
        : theme.palette.grey[100]};
      box-shadow: ${theme.palette.product === 'agility' &&
      '0 0 5px rgba(0, 0, 0, 0.15)'};
      box-sizing: border-box;
      color: ${theme.palette.product === 'agility'
        ? theme.palette.layer.n700
        : theme.palette.grey[700]};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: 0.01em;
      padding: ${theme.palette.product === 'agility' && `${theme.spacing(2)}`};
      -o-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -moz-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -webkit-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

      header {
        align-items: center;
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        display: flex;
        height: 40px;
        flex-shrink: 0;
        overflow: hidden;
        margin-bottom: ${theme.palette.product === 'agility' &&
        `${theme.spacing(1)}`};
        padding: ${theme.palette.product === 'agililty'
          ? theme.spacing(0, 0, 1)
          : theme.spacing(1, 2)};
        white-space: nowrap;

        &.app-logo {
          box-sizing: border-box;

          .dot-app-logo {
            svg,
            img {
              max-width: 100%;
            }
          }
        }

        .dot-avatar {
          margin-right: ${theme.spacing(1)};
        }
      }

      .go-back {
        align-items: center;
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        display: flex;

        .dot-icon {
          margin-right: ${theme.spacing(2)};
          width: 40px;
          height: 40px;
        }

        &:hover {
          background-color: ${theme.palette.grey[100]};
        }
      }

      hr.MuiDivider-root {
        border-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        margin: ${theme.palette.product === 'agility'
          ? theme.spacing(2, 0)
          : theme.spacing(1, 0)};
      }

      .MuiListSubheader-root {
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        margin: ${theme.spacing(0, 0, 1)};

        .dot-typography {
          margin: 0;
        }
      }

      ul.side-nav {
        background: transparent;
        flex-grow: 2;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0;
        width: auto;

        .dot-nested-list {
          background: transparent;
        }

        .${nestedDrawerClassName} {
          .dot-drawer-paper {
            border-right: 1px solid
              ${theme.palette.product === 'agility'
                ? theme.palette.agilityInterface.sideNavBorder
                : theme.palette.grey[100]};
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
            padding-top: ${theme.palette.product === 'agility' && '10px'};
          }

          .MuiTypography-root.MuiTypography-subtitle2 {
            border: ${theme.palette.product === 'agility' && 'none'};
            color: ${theme.palette.product === 'agility' &&
            theme.palette.agilityInterface.sideNavSubHeaderText};
            font-size: ${theme.palette.product === 'agility' && '11px'};
            line-height: 40px;
            margin: ${theme.palette.product === 'agility' && '10px 0 0'};
            padding: ${theme.palette.product === 'agility' && '0 8px'};
          }

          .${listItemRootClass} {
            margin: 0;
            padding-left: ${theme.spacing(2)};
          }
        }

        .dot-list-item {
          height: ${theme.palette.product === 'agility' ? '40px' : '44px'};
          padding: 0;
          margin-bottom: ${theme.palette.product === 'agility' &&
          `${theme.spacing(1)}`};

          &.MuiListItem-root.Mui-selected,
          &.MuiListItem-root.Mui-selected:hover,
          &:hover {
            background-color: ${theme.palette.product === 'agility' &&
            'transparent'};
          }

          &.Mui-focusVisible {
            box-shadow: inset 0 0 0 2px ${theme.palette.layer.n0};
            border: 2px solid ${theme.palette.layer.n900};
          }

          &:hover,
          &:active,
          &:focus {
            .dot-typography,
            .dot-icon i.dot-i:before {
              color: ${theme.palette.product === 'agility' &&
              theme.palette.agilityInterface.sideNavHoverText};
            }
          }

          &.open {
            background-color: ${theme.palette.product === 'agility' &&
            theme.palette.agilityInterface.sideNavHoverBg};
            border: ${theme.palette.product === 'agility'
              ? `1px solid ${theme.palette.agilityInterface.sideNavHoverBorder}`
              : 'none'};
            border-radius: ${theme.palette.product === 'agility' && '4px'};

            &:hover {
              background-color: ${theme.palette.product === 'agility' &&
              theme.palette.agilityInterface.sideNavHoverBg};
            }
          }

          .MuiTouchRipple-root {
            display: ${theme.palette.product === 'agility' && 'none'};
          }

          .dot-list-item-link .dot-icon {
            margin-right: ${theme.spacing(1)};
          }

          .dot-icon {
            border-radius: 50%;
            height: 40px;
            margin: ${theme.spacing(0, 1)};
            width: 40px;
          }

          .dot-typography {
            white-space: nowrap;
          }
        }
      }

      .toggle-nav {
        border-top: 1px solid;
        border-top-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        padding: ${theme.spacing(1)};
        text-align: right;

        .dot-icon {
          transform: rotate(0deg);
          -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          -moz-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }
      }

      .powered-by {
        border-top: 1px solid;
        border-top-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.sideNavBorder
          : theme.palette.grey[100]};
        color: ${theme.palette.grey[400]};
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        font-size: 12px;
        overflow: hidden;
        padding: ${theme.spacing(1)};

        p.desc {
          white-space: nowrap;
        }

        .company-name {
          margin-top: ${theme.spacing(1)};
        }

        .d-icon {
          display: none;
        }
      }

      &.collapsed {
        overflow: hidden;
        padding: ${theme.palette.product === 'agility' && theme.spacing(2, 0)};
        width: 58px;
        -o-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -moz-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -webkit-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

        li.MuiListSubheader-root .dot-typography,
        .go-back .MuiTypography-root,
        .MuiListItem-divider .dot-list-item-link,
        .child,
        .powered-by .company-name,
        .powered-by p.desc {
          display: none;
        }

        .dot-nested-drawer li.MuiListSubheader-root .dot-typography,
        .powered-by .d-icon {
          display: block;
        }

        header .dot-app-logo {
          text-align: center;
        }

        ul.side-nav {
          width: 56px;
          .dot-list-item {
            margin-left: 0;
          }

          .toggle-nav {
            align-self: center;
          }
        }

        .go-back .dot-icon {
          margin: ${theme.spacing(0, 1)};
        }

        .powered-by {
          align-items: center;
        }
      }
    }
  `}
`;
