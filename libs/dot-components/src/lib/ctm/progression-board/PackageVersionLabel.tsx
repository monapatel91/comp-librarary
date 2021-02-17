import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';

export interface PackageVersionLabelProps extends CommonProps {
  baseUrl: string;
  package_id: string;
  version: string;
}

export const PackageVersionLabel = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  package_id,
  version,
}: PackageVersionLabelProps) => {
  const rootClasses = useStylesWithRootClass('title', className);
  return (
    <a
      className={rootClasses}
      data-testid={dataTestId}
      href={`${baseUrl}/package_detail?id=${package_id}`}
      target="_blank"
      rel="noreferrer"
    >
      {version ? version : '(no version)'}
    </a>
  );
};

export default PackageVersionLabel;
