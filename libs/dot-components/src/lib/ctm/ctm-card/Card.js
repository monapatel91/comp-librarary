import React from 'react';
import { DotIcon } from '../../components/icon/Icon';

export const CardIdentifier = ({ url, title, titleTooltip }) => (
  <div className="identity-left left">
    <div className="identifier">
      <a
        href={url}
        data-cooltip={titleTooltip}
        className="tooltip-bottom"
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </div>
  </div>
);

export const CardIndicator = ({ id, label = '', onHover, url, baseUrl }) => {
  const classes = `action tooltip-bottom ${id}`;
  if (url === undefined) {
    return (
      <div data-cooltip={label} className={classes} onMouseEnter={onHover}>
        <DotIcon iconId={id} fontSize="small" title={label} />
      </div>
    );
  } else {
    const fullUrl = baseUrl + url;
    return (
      <div data-cooltip={label} className={classes} onMouseEnter={onHover}>
        <a href={fullUrl} target="_blank" rel="noreferrer">
          <DotIcon iconId={id} fontSize="small" title={label} />
        </a>
      </div>
    );
  }
};

export const CardIndicators = (props) => (
  <div className="identity-right right">
    <div className="actions-container">
      {(props.indicators || []).map((indicator, i) => (
        <CardIndicator key={i} {...indicator} baseUrl={props.baseUrl} />
      ))}
      {props.actionMenu}
    </div>
  </div>
);

export const Card = (props) => {
  const classes = `card-container ${props.classNames}`;
  return (
    <div className={classes}>
      <div className="card">
        <div className="identity">
          <CardIdentifier {...props} />
          {props.indicators}
        </div>
        <div className="content">{props.children}</div>
        <div className="bottom-content">
          <div className="bottom-content-left">{props.bottomLeft}</div>
          <div className="bottom-content-right">{props.bottomRight}</div>
        </div>
      </div>
    </div>
  );
};
