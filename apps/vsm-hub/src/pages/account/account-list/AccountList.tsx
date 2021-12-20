import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router';
import ReactECharts from 'echarts-for-react';
import {
  DotAvatar,
  DotButton,
  DotCardContent,
  DotCardHeader,
  DotTable,
} from '@digital-ai/dot-components';
import {
  checkSelectedItem,
  useNavListContext,
} from 'apps/vsm-hub/src/context/NavigationContext';
import { VsmHubPageSection } from '../../../dot-components/layouts/styled-page/PageSection';
import { mainLevelNav } from '../../../routes/routes';
import {
  StyledTableCard,
  tableCardClassName,
} from '../../products/usage/Usage.styles';

export const VsmHubAccountList = () => {
  const { setNavList, setGoBack } = useNavListContext();
  const history = useHistory();

  useEffect(() => {
    setNav();
  }, [setNavList]);

  const setNav = () => {
    setNavList(checkSelectedItem(1, mainLevelNav));
    setGoBack(false);
  };

  const handleDetails = (event) => {
    history.push({
      pathname: `/account/${event.id}`,
    });
  };

  const options = {
    legend: {
      right: 0,
      top: 0,
      icon: 'circle',
      data: ['Target', 'Entitled', 'Agility', 'Release'],
    },
    grid: { top: 40, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Oct 20', 'Nov 20', 'Dec 20', 'Jan 21', 'Feb 21', 'Mar 21'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Target',
        type: 'line',
        data: [750, 750, 750, 750, 750, 750],
        itemStyle: { color: '#4b5a6f' },

        emphasis: {
          focus: 'series',
        },
      },
      {
        name: 'Agility',
        type: 'bar',
        stack: 'products',
        data: [64, 400, 54, 300, 45, 80],
        itemStyle: { color: '#b8609c' },
        smooth: true,
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: 'Release',
        type: 'bar',
        stack: 'products',
        itemStyle: { color: '#c1c6cd' },
        data: [100, 34, 54, 200, 45, 80],
        smooth: true,
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: 'Entitled',
        type: 'bar',
        stack: 'entitled',
        data: [700, 700, 400, 500, 300, 600],
        itemStyle: { color: '#7b9bc9' },

        smooth: true,
        emphasis: {
          focus: 'series',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  const columns: Array<{ id: string; label: string }> = [
    { id: 'label', label: 'Account' },
    { id: 'units', label: 'Units' },
    { id: 'entitled', label: 'Entitled' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'actions', label: 'Actions' },
  ];

  const accounts = [
    {
      id: 'acc-1',
      label: 'Account 1',
      units: 50,
      entitled: 100,
      organizations: 10,
    },
    {
      id: 'acc-2',
      label: 'Account 2',
      units: 262,
      entitled: 100,
      organizations: 22,
    },
    {
      id: 'acc-3',
      label: 'Account 3',
      units: 80,
      entitled: 100,
      organizations: 60,
    },
    {
      id: 'acc-4',
      label: 'Account 4',
      units: 90,
      entitled: 100,
      organizations: 3,
    },
    {
      id: 'acc-5',
      label: 'Account 5',
      units: 98,
      entitled: 100,
      organizations: 4,
    },
    {
      id: 'acc-6',
      label: 'Account 6',
      units: 20,
      entitled: 100,
      organizations: 8,
    },
  ];
  const data = accounts.map((account) => ({
    rowData: {
      label: (
        <Grid container alignItems="center">
          <DotAvatar
            size="medium"
            type="image"
            iconId="file-image"
            alt={`${account.id}`}
          />
          <span className="label">{account.label}</span>
        </Grid>
      ),
      units: account.units,
      entitled: account.entitled,
      organizations: account.organizations,
      actions: account.id && (
        <>
          <DotButton type="outlined" onClick={() => handleDetails(account)}>
            Details
          </DotButton>
          {/* Hooked this up because it could be useful but leaving it commented out for now */}
          {/* We decided to leave delete out of designs because it could be problematic for running demos */}
          {/* <DotIconButton iconId="delete" onClick={() => onDelete(tool)} /> */}
        </>
      ),
    },
  }));

  return (
    <VsmHubPageSection>
      <StyledTableCard className={tableCardClassName}>
        <>
          <DotCardHeader title="Overall DFPs" />
          <DotCardContent>
            <ReactECharts
              option={options}
              style={{ height: '225px', width: '100%' }}
            />
          </DotCardContent>
        </>
      </StyledTableCard>
      <StyledTableCard className={tableCardClassName}>
        <>
          <DotCardHeader title="Account Details" />
          <DotCardContent>
            <DotTable
              columns={columns}
              data={data}
              ariaLabel="Digital Flex Points"
            />
          </DotCardContent>
        </>
      </StyledTableCard>
    </VsmHubPageSection>
  );
};
