import {
  DotAvatar,
  DotButton,
  DotCard,
  DotCardContent,
  DotCardFooter,
  DotCardHeader,
  DotIcon,
} from '@digital-ai/dot-components';
import { Typography } from '@material-ui/core';
import React from 'react';
import { StyledCapabilities, rootClassName } from './CapabilitiesList.styles';
import { SimpleStatus, VsmHubSimpleStatus } from './simple-status/SimpleStatus';

export interface Capability {
  iconId?: string;
  title: string;
  subtitle?: string;
  status?: SimpleStatus;
  statusLabel?: string;
  id: string;
}

export interface CapabilitiesProps {
  title?: string;
  capabilityItems: Array<Capability>;
  onClick?: (type: string, value: Capability) => void;
  actions?: JSX.Element;
}

export const VsmHubCapabilities = ({
  capabilityItems,
  onClick,
  title = 'Installed Capabilities',
  actions,
}: CapabilitiesProps) => {
  const handleClick = (type: string, item: Capability) => {
    onClick && onClick(type, item);
  };

  const renderCapabilities = capabilityItems.map((item, index) => {
    return (
      <DotCard key={index}>
        <div className="horizontal-card">
          <DotCardHeader
            className="list-header"
            titleSize="medium"
            title={item.title}
            subheader={item.subtitle}
            avatar={<DotAvatar alt="Chef" iconId="file-image" />}
          ></DotCardHeader>
          {item.status && (
            <DotCardContent className="center">
              <VsmHubSimpleStatus
                status={item.status}
                label={item.statusLabel}
              />
            </DotCardContent>
          )}

          <DotCardFooter className="center">
            {!actions ? (
              <>
                <DotButton
                  onClick={() => handleClick('launch', item)}
                  size="small"
                >
                  Launch
                </DotButton>
                <DotButton
                  onClick={() => handleClick('details', item)}
                  type="outlined"
                  size="small"
                >
                  Details
                </DotButton>
              </>
            ) : (
              actions
            )}
          </DotCardFooter>
        </div>
      </DotCard>
    );
  });

  return (
    <StyledCapabilities className={rootClassName}>
      <Typography className="capabilities-title" component="h3" variant="h2">
        {title}
      </Typography>
      {renderCapabilities}
    </StyledCapabilities>
  );
};
