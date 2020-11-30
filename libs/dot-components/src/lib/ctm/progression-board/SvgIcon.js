import React from 'react';

export default (props) => {
  const { id, className, onClick, title, style } = props;
  const classNames = `svg-icon ${id} ${className}`;
  const tooltipMessage = props['data-cooltip'];
  const hoverTitle = tooltipMessage ? tooltipMessage : title;
  return (
    <span
      className={classNames}
      data-cooltip={tooltipMessage}
      onClick={onClick}
      style={style}
    >
      <svg>
        <title>{hoverTitle}</title>
        <use href={`#${id}`} />
      </svg>
    </span>
  );
};
