import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotLink } from '../../components/link/Link';

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
    <DotLink
      className={rootClasses}
      data-testid={dataTestId}
      href={`${baseUrl}/package_detail?id=${package_id}`}
      target="_blank"
      rel="noreferrer"
    >
      {version ? version : '(no version)'}
    </DotLink>
  );
};

export default PackageVersionLabel;
