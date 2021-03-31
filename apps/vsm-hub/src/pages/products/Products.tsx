import { DotButton, DotList, ListItemProps } from '@digital-ai/dot-components';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Capability,
  VsmHubCapabilities,
} from '../../components/CapabilitiesList';
import { DotMainHero } from '../../dot-components/main-hero/MainHero';
import {
  checkSelectedItem,
  useNavListContext,
} from '../../context/NavigationContext';
import { productLevelNav, agilityBack } from '../../routes/routes';
import { StyledProducts, rootClassName } from './Products.style';
import { Grid, Typography } from '@material-ui/core';
import { VsmHubPageSection } from '../../dot-components/layouts/styled-page/PageSection';
export const backItems: Array<ListItemProps> = [
  {
    iconId: 'back',
    onClick: () => console.log('go back clicked'),
    text: 'Agility',
    title: `Go Back to Home`,
    component: React.forwardRef((props, ref) => (
      <Link {...props} to="/" ref={ref} />
    )),
  },
];

export interface ProductsProps {}

export const releaseNotes: Array<Capability> = [
  {
    iconId: 'file-image',
    title: 'Winter-2020.0.10',
    subtitle: 'New look and feel',
    id: 'winter-2020.0.10',
  },
  {
    iconId: 'file-image',
    title: 'winter-2020.0.09',
    subtitle: 'Better team rooms experience',
    id: 'release',
  },
  {
    iconId: 'file-image',
    title: 'Winter-2020.0.08',
    subtitle: 'SSO and identity management',
    id: 'winter-2020.0.08',
  },
];

export const VsmHubProducts = ({}: ProductsProps) => {
  const { navList, setNavList, setGoBack, setBackItem } = useNavListContext();

  const history = useHistory();

  useEffect(() => {
    setNavList(checkSelectedItem(0, productLevelNav));
    setNav();
    setGoBack(true);
  }, [setNavList]);

  const setNav = () => {
    setBackItem({
      ...agilityBack,
      onClick: () => history.push('/'),
    });
    setGoBack(true);
  };

  return (
    <>
      <DotMainHero
        rightBackgroundImage="/assets/svg/agility-hero.svg"
        marginBottom={0}
        height={300}
        title="Welcome to"
        message="Agility"
        ctaLabel="Launch"
      ></DotMainHero>
      <VsmHubPageSection>
        <StyledProducts className={rootClassName}>
          <Grid container spacing={2}>
            <Grid item sm={9}>
              <VsmHubCapabilities
                title="Release notes"
                capabilityItems={releaseNotes}
                actions={<DotButton type="outlined">View</DotButton>}
              />
            </Grid>
            <Grid item sm={3}>
              <Typography
                className="resource-title"
                component="h3"
                variant="h2"
              >
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
            </Grid>
          </Grid>
        </StyledProducts>
      </VsmHubPageSection>
    </>
  );
};
