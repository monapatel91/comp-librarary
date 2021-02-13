import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../../components/icon/Icon';

export const shorten = (str: string, length: number) =>
  str.length > length ? `${str.substring(0, length)}...` : str;

export interface CardIdentifierProps {
  url: string;
  title: string;
}

export interface CardIndicatorsProps {
  baseUrl?: string;
  indicators: Array<CardIndicatorProps>;
}

export interface CardIndicatorProps {
  baseUrl?: string;
  id: string;
  label: string;
  onHover?: () => void;
  url?: string;
}

export interface CardProps {
  bottomLeft: JSX.Element;
  bottomRight: JSX.Element;
  children: JSX.Element | Array<JSX.Element>;
  dataTestId: string;
  fullversion_from: string;
  fullversion_to: string;
  indicators: JSX.Element;
  rev_from: number;
  rev_to: number;
  url: string;
}

export const CardIdentifier = ({ url, title }: CardIdentifierProps) => (
  <a className="identifier" href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export const CardIndicator = ({
  baseUrl,
  id,
  label = '',
  onHover,
  url,
}: CardIndicatorProps) => {
  const rootClasses = useStylesWithRootClass('action', id);

  return (
    <div className={rootClasses} onMouseEnter={onHover}>
      {url ? (
        <a href={baseUrl + url} target="_blank" rel="noreferrer" title={label}>
          <DotIcon iconId={id} fontSize="small" title={label} />
        </a>
      ) : (
        <DotIcon iconId={id} fontSize="small" title={label} />
      )}
    </div>
  );
};

export const CardIndicators = ({
  baseUrl,
  indicators,
}: CardIndicatorsProps) => (
  <div className="actions-container">
    {indicators.map((indicator, i) => (
      <CardIndicator baseUrl={baseUrl} key={i} {...indicator} />
    ))}
  </div>
);

export const Card = ({
  bottomLeft,
  bottomRight,
  children,
  dataTestId,
  fullversion_from,
  fullversion_to,
  indicators,
  rev_from,
  rev_to,
  url,
}: CardProps) => {
  return (
    <div className="card" data-testid={dataTestId}>
      <div className="identity">
        <CardIdentifier
          title={shorten(
            `${fullversion_from || rev_from} - ${fullversion_to || rev_to}`,
            18
          )}
          url={url}
        />
        {indicators}
      </div>
      {children && <div className="content">{children}</div>}
      <div className="bottom-content">
        {bottomLeft}
        {bottomRight}
      </div>
    </div>
  );
};

export default Card;
