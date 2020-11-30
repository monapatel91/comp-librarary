import React from 'react';

export default (props) => {
  const { package_id, version } = props;

  const title = version ? version : '(no version)';
  const href = `package_detail?id=${package_id}`;

  return <a href={href}>{title}</a>;
};
