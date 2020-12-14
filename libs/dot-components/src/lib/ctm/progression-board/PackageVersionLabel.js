import React from 'react';

export default (props) => {
  const { package_id, version } = props;

  const title = version ? version : '(no version)';
  const href = `/package_detail?id=${package_id}`;
  const fullUrl = props.baseUrl + href;

  return (
    <a href={fullUrl} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};
