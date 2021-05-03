import React, { ReactNode } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { rootClassName, StyledDrawerItem } from './DrawerItem.styles';
import { DotAvatar, DotTypography, TypographyVariant } from '../../components';

export interface DrawerItemProps extends CommonProps {
  actionNode?: ReactNode;
  avatarAltText: string;
  avatarIcon: string;
  contentText: string;
  contentVariant?: TypographyVariant;
}

export const DrawerItem = ({
  actionNode = null,
  avatarAltText,
  avatarIcon,
  className,
  contentText,
  contentVariant = 'body1',
  'data-testid': dataTestId,
}: DrawerItemProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const renderActionNode = (): ReactNode => (
    <div className="action-node">{actionNode}</div>
  );

  return (
    <StyledDrawerItem className={rootClasses} data-testid={dataTestId}>
      <DotAvatar
        alt={avatarAltText}
        data-testid={`${dataTestId}-avatar-icon`}
        iconId={avatarIcon}
      />
      <DotTypography className="content" variant={contentVariant}>
        {contentText}
      </DotTypography>
      {actionNode && renderActionNode()}
    </StyledDrawerItem>
  );
};
