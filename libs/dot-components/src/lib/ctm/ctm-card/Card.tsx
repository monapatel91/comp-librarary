import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../../components/icon/Icon';
import { DotLink } from '../../components/link/Link';
import { CommonProps } from '../../components/CommonProps';

export const shorten = (str: string, length: number) =>
  str.length > length ? `${str.substring(0, length)}...` : str;

export interface CardIdentifierProps extends CommonProps {
  url: string;
  title: string;
}

export interface CardIndicatorsProps extends CommonProps {
  baseUrl?: string;
  indicators: Array<CardIndicatorProps>;
}

export interface CardIndicatorProps extends CommonProps {
  baseUrl?: string;
  id: string;
  label: string;
  onHover?: () => void;
  url?: string;
}

export interface CardProps extends CommonProps {
  bottomLeft: JSX.Element;
  bottomRight: JSX.Element;
  children: JSX.Element | Array<JSX.Element>;
  fullversion_from: string;
  fullversion_to: string;
  indicators: JSX.Element;
  rev_from: number;
  rev_to: number;
  url: string;
}

export const CardIdentifier = ({
  className,
  'data-testid': dataTestId,
  url,
  title,
}: CardIdentifierProps) => {
  const rootClasses = useStylesWithRootClass('identifier', className);
  return (
    <DotLink
      className={rootClasses}
      data-testid={dataTestId}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </DotLink>
  );
};

export const CardIndicator = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  id,
  label = '',
  onHover,
  url,
}: CardIndicatorProps) => {
  const rootClasses = useStylesWithRootClass('action', id, className);

  return (
    <div
      className={rootClasses}
      data-testid={dataTestId}
      onMouseEnter={onHover}
    >
      {url ? (
        <DotLink
          href={baseUrl + url}
          target="_blank"
          rel="noreferrer"
          title={label}
        >
          <DotIcon iconId={id} fontSize="small" title={label} />
        </DotLink>
      ) : (
        <DotIcon iconId={id} fontSize="small" title={label} />
      )}
    </div>
  );
};

export const CardIndicators = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  indicators,
}: CardIndicatorsProps) => {
  const rootClasses = useStylesWithRootClass('actions-container', className);
  return (
    <div className={rootClasses} data-testid={dataTestId}>
      {indicators.map((indicator, i) => (
        <CardIndicator baseUrl={baseUrl} key={i} {...indicator} />
      ))}
    </div>
  );
};

export const Card = ({
  bottomLeft,
  bottomRight,
  children,
  className,
  'data-testid': dataTestId,
  fullversion_from,
  fullversion_to,
  indicators,
  rev_from,
  rev_to,
  url,
}: CardProps) => {
  const rootClasses = useStylesWithRootClass('card', className);
  return (
    <div className={rootClasses} data-testid={dataTestId}>
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
