import React, { Fragment, useState } from 'react';
import { Theme, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { AvatarProps, DotAvatar } from '../avatar/Avatar';
import { DotIconButton } from '../button/IconButton';
import { DotNavigation } from '../navigation/Navigation';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';

export interface SidebarProps extends CommonProps {
  /** Component passed for back nav item */
  backItem?: Array<NavigationItemProps>;
  /** If displayBrand is true this text will be displayed above the Digital.ai branding */
  brandDesc?: string;
  /** If provided will display below the navItems */
  children?: JSX.Element;
  /** If true will display the expand/collapse icon button */
  collapsable?: boolean;
  /** If true will display Digital.ai branding at the bottom */
  displayBrand?: boolean;
  /** If true will display the go back nav item at the top of the sidebar */
  goBack?: boolean;
  /** Array of nav items */
  navItems?: Array<NavigationItemProps>;
  /** The text that is displayed at the top of the sidebar */
  title?: string;
  /** If provided, will display an avatar next to the title text */
  titleAvatarProps?: AvatarProps;
}

const StyledSidebar = styled.aside`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-sidebar {
      align-items: stretch;
      background: ${theme.palette.grey[50]};
      border-right: 1px solid ${theme.palette.grey[100]};
      color: ${theme.palette.grey[700]};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: 0.01em;
      padding-top: ${theme.spacing(1) * 0.5}px;
      width: 240px;
      -o-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -moz-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -webkit-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

      h3 {
        align-items: center;
        border-bottom: 1px solid ${theme.palette.grey[100]};
        display: flex;
        font-size: 14px;
        overflow: hidden;
        padding: ${theme.spacing(1, 2)};
        white-space: nowrap;

        .dot-avatar {
          margin-right: ${theme.spacing(1)}px;
        }
      }

      nav.go-back {
        border-bottom: 1px solid ${theme.palette.grey[100]};

        li a {
          color: ${theme.palette.grey[700]};
          font-size: 16px;
          padding: ${theme.spacing(1)}px;
        }
      }

      nav.side-nav {
        flex-grow: 2;
        overflow-x: hidden;
        overflow-y: auto;

        li {
          flex-grow: 2;

          &.divider {
            border-bottom: 1px solid ${theme.palette.grey[100]};
            margin: ${theme.spacing(1)}px 0 0;

            h5 {
              font-size: 12px;
              font-weight: normal;
              line-height: 36px;
              margin: 0;
              padding: 0 ${theme.spacing(2)}px;
            }
          }

          &.has-subnav,
          a {
            align-items: stretch;
            font-size: 14px;
            height: 44px;
            padding: 6px;

            &.active,
            &:hover,
            &:focus {
              background: ${theme.palette.grey[100]};
              color: ${theme.palette.grey[700]};
            }

            p {
              flex-grow: 1;
            }

            .dot-icon {
              padding: 0;

              &.first {
                margin-right: ${theme.spacing(3)}px;
                padding-left: 10px;
              }
            }
          }
        }
      }

      .toggle-nav {
        border-top: 1px solid ${theme.palette.grey[100]};
        padding: ${theme.spacing(1)}px 6px 0;
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
        border-top: 1px solid ${theme.palette.grey[100]};
        color: ${theme.palette.grey[400]};
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        font-size: 12px;
        margin: ${theme.spacing(1)}px;
        overflow: hidden;
        padding: ${theme.spacing(1)}px;

        span.desc {
          white-space: nowrap;
        }

        .company-name {
          margin-top: ${theme.spacing(1)}px;
        }

        .d-icon {
          display: none;
        }
      }

      &.collapsed {
        width: 56px;
        -o-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -moz-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -webkit-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

        h4::first-letter {
          background: ${theme.palette.grey[200]};
          border-radius: 50%;
          margin-right: 9999px;
          padding: ${theme.spacing(1 * 0.5)}px ${theme.spacing(1)}px;
        }

        nav li {
          &.has-subnav,
          a {
            height: 44px;
            padding: 6px;
          }

          &.divider h5 {
            opacity: 0;
          }
        }

        .toggle-nav {
          align-self: center;

          .dot-icon {
            transform: rotate(180deg);
            -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            -moz-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          }
        }

        .powered-by {
          align-items: center;

          .company-name,
          span.desc {
            display: none;
          }

          .d-icon {
            display: block;
          }
        }
      }
    }

    .dot-flyout {
      margin: 10px 0 0 190px;
      width: 248px;

      &.collapsed {
        margin-left: 36px;
      }

      li {
        &.active,
        &:hover,
        &:focus {
          background: ${theme.palette.grey[100]};
        }
      }

      a {
        align-items: center;
        color: ${theme.palette.grey[700]};
        display: flex;
        &.active,
        &:hover,
        &:focus {
          background: transparent;
        }
      }
    }
  `}
`;

/** This is a custom component which is used for the sidebar */
export const DotSidebar = ({
  backItem = [],
  brandDesc,
  children = null,
  className,
  collapsable = false,
  'data-testid': dataTestId,
  displayBrand = true,
  goBack,
  navItems = [],
  title,
  titleAvatarProps = null,
}: SidebarProps) => {
  const [open, updateOpen] = useState(true);
  const rootClasses = useStylesWithRootClass(
    'dot-sidebar',
    `${!open ? 'collapsed' : 'expanded'} ${className}`
  );

  return (
    <StyledSidebar
      className={rootClasses}
      data-testid={`primaryNav ${dataTestId}`}
    >
      {title && (
        <Typography variant="h3">
          <Fragment>
            {titleAvatarProps && <DotAvatar {...titleAvatarProps} />}
            {title}
          </Fragment>
        </Typography>
      )}
      {goBack && (
        <DotNavigation
          className="go-back"
          direction="vertical"
          items={backItem}
        />
      )}
      <DotNavigation
        ariaLabel="left navigation"
        className="side-nav dense"
        data-testid="sideNav"
        direction="vertical"
        isOpen={open}
        items={navItems}
      />
      {children}
      {collapsable && (
        <div className="toggle-nav">
          <DotIconButton
            iconId="chevron-left"
            onClick={() => updateOpen(!open)}
          />
        </div>
      )}
      {displayBrand && (
        <div className="powered-by">
          <span className="desc">{brandDesc}</span>
          <LogoDigitalAi className="company-name" title="digital.ai" />
          <LogoD className="d-icon" title="digital.ai" />
        </div>
      )}
    </StyledSidebar>
  );
};
