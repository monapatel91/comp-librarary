import React from 'react';
import { DotIcon } from '../../components/icon/Icon';

export interface QCIconProps {
  id: string;
  label: string;
  onHover?: () => void;
  url?: string;
}

export interface QualityCornerProps {
  package_name: string;
  qcicons: Array<QCIconProps>;
  version: string;
}

export const QualityCorner = ({
  qcicons,
  version,
  package_name,
}: QualityCornerProps) => (
  <div
    className="quality-corner"
    data-package-name={package_name}
    data-version={version}
  >
    {qcicons.map((icon, i) => (
      <QCIcon key={i} {...icon} />
    ))}
  </div>
);

export const QCIcon = ({ id, label, onHover, url }: QCIconProps) => {
  return (
    <a
      href={url}
      onMouseEnter={onHover}
      rel="noreferrer"
      target="_blank"
      title={label}
    >
      <DotIcon fontSize="small" iconId={id} title={label} />
    </a>
  );
};

export default QualityCorner;
