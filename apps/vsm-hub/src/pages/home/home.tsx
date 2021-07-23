import {
  CssCell,
  CssGrid,
  CssGridDebug,
  DotList,
} from '@digital-ai/dot-components';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
  VsmHubCapabilities,
  Capability,
} from '../../components/CapabilitiesList';
import {
  checkSelectedItem,
  useNavListContext,
} from '../../context/NavigationContext';
import { DotMainHero } from '../../dot-components/main-hero/MainHero';
import { mainLevelNav, backItem } from '../../routes/routes';
import { StyledVsmHubHome, rootClassName } from '../home/home.styles';

export const capabilities: Array<Capability> = [
  {
    iconId: 'file-image',
    title: 'Agility',
    subtitle: 'Enterprise Agile Planning',
    status: 'ready',
    statusLabel: 'Ready',
    id: 'agility',
  },
  {
    iconId: 'file-image',
    title: 'Release',
    subtitle: 'Advance pipeline management',
    status: 'ready',
    statusLabel: 'Ready',
    id: 'release',
  },
  {
    iconId: 'file-image',
    title: 'Risk Prediction',
    subtitle: 'Ai-Powered Analytics',
    status: 'ready',
    statusLabel: 'Ready',
    id: 'risk-predication',
  },
];

export const VsmHome = () => {
  const { navList, setNavList, setGoBack, setBackItem } = useNavListContext();
  const history = useHistory();

  useEffect(() => {
    setNavList(checkSelectedItem(0, mainLevelNav));
    setBackItem(backItem);
    setGoBack(false);
  }, [setNavList]);

  const handleActions = (type: string, item: Capability) => {
    if (type === 'launch') {
      window.open(
        'https://www7.v1host.com/V1Production/Default.aspx?menu=MyHomeEnterpriseGettingStartedPage',
        '_blank'
      );
    } else if (type === 'details') {
      history.push({
        pathname: `/product/${item.id}`,
      });
    }
  };

  return (
    <>
      <DotMainHero
        rightBackgroundImage="/assets/svg/rocket.svg"
        marginBottom={0}
        height={200}
        title="Value Stream Management"
        message="Learn how to get the most out
of Agile and DevOps"
        ctaLabel="Learn more"
      ></DotMainHero>
      <StyledVsmHubHome className={rootClassName}>
        <CssGridDebug showInfo />
        <CssGrid>
          <CssCell
            xs={{ start: 1, span: 4 }}
            sm={{ start: 1, span: 6 }}
            md={{ start: 1, span: 9 }}
          >
            <VsmHubCapabilities
              onClick={handleActions}
              capabilityItems={capabilities}
            />
          </CssCell>
          <CssCell
            xs={{ start: 1, span: 4 }}
            sm={{ start: 7, span: 2 }}
            md={{ start: 10, span: 3 }}
          >
            <Typography className="resource-title" component="h3" variant="h2">
              Resources
            </Typography>
            <DotList
              className=""
              dense={false}
              items={[
                {
                  href: '/support',
                  text: 'Support',
                },
                { divider: true },
                {
                  href: '/support',
                  text: 'VSM FAQ',
                },
                { divider: true },
                {
                  href: '/documentation',
                  text: 'Documentation',
                },
                { divider: true },
                {
                  href: '/marketplace',
                  text: 'Marketplace',
                },
              ]}
            />
          </CssCell>
        </CssGrid>
      </StyledVsmHubHome>
    </>
  );
};
