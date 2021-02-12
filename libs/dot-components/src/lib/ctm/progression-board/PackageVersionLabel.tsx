import React from 'react';

export interface PackageVersionLabelProps {
  baseUrl: string;
  package_id: string;
  version: string;
}

export const PackageVersionLabel = ({
  baseUrl,
  package_id,
  version,
}: PackageVersionLabelProps) => {
  return (
    <a
      className="title"
      href={`${baseUrl}/package_detail?id=${package_id}`}
      target="_blank"
      rel="noreferrer"
    >
      {version ? version : '(no version)'}
    </a>
  );
};

export default PackageVersionLabel;
