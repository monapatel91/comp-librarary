import React from 'react';
import SvgIcon from './SvgIcon';

export default (props) => (
  <div
    className="quality-corner"
    package_name={props.package_name}
    version={props.version}
  >
    {(props.qcicons || []).map((icon, i) => (
      <QCIcon key={i} {...icon} />
    ))}
  </div>
);

export const QCIcon = ({ id, label = '', onHover = null, url }) => {
  const classes = `hidden qcicon tooltip-bottom ${id}`;
  return (
    <a
      href={url}
      target="blank"
      data-cooltip={label}
      className={classes}
      onMouseEnter={onHover}
    >
      <SvgIcon id={id} classNames="small" />
    </a>
  );
};
