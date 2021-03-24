import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotIcon } from '../../components/icon/Icon';
import { DotLink } from '../../components/link/Link';

export interface QCIconProps extends CommonProps {
  id: string;
  label: string;
  onHover?: () => void;
  url?: string;
}

export interface QualityCornerProps extends CommonProps {
  qcicons: Array<QCIconProps>;
}

export const QualityCorner = ({
  className,
  'data-testid': dataTestId,
  qcicons,
}: QualityCornerProps) => {
  const rootClasses = useStylesWithRootClass('quality-corner', className);
  return (
    <div className={rootClasses} data-testid={dataTestId}>
      {qcicons.map((icon, i) => (
        <QCIcon key={i} {...icon} />
      ))}
    </div>
  );
};

export const QCIcon = ({
  className,
  'data-testid': dataTestId,
  id,
  label,
  onHover,
  url,
}: QCIconProps) => {
  const rootClasses = useStylesWithRootClass(className);
  return (
    <DotLink
      className={rootClasses}
      data-testid={dataTestId}
      href={url}
      onMouseEnter={onHover}
      rel="noreferrer"
      target="_blank"
      title={label}
    >
      <DotIcon fontSize="small" iconId={id} title={label} />
    </DotLink>
  );
};
