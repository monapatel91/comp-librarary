import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

import { productLevelNav, agilityBack } from '../../../routes/routes';
import {
  useNavListContext,
  checkSelectedItem,
} from 'apps/vsm-hub/src/context/NavigationContext';
import { VsmHubPageSection } from '../../../dot-components/layouts/styled-page/PageSection';
import {
  DotAvatar,
  DotButton,
  DotCard,
  DotCardContent,
  DotCardHeader,
  DotTable,
} from '@digital-ai/dot-components';
import { Grid } from '@mui/material';
import {
  StyledStatusIcon,
  iconClassName,
  StyledTableCard,
  tableCardClassName,
} from './Usage.styles';
import { VsmHubToolDfps } from './total-dfp/TotalDfps';
import { useNavigate } from 'react-router';

const dfps = [
  {
    id: 'org-1',
    label: 'Organization 1',
    units: 50,
    entitled: 100,
    status: '',
  },
  {
    id: 'org-2',
    label: 'Organization 2',
    units: 262,
    entitled: 100,
    status: 'error',
  },
  {
    id: 'org-3',
    label: 'Organization 3',
    units: 80,
    entitled: 100,
    status: '',
  },
  {
    id: 'org-4',
    label: 'Organization 4',
    units: 90,
    entitled: 100,
    status: '',
  },
  {
    id: 'org-5',
    label: 'Organization 5',
    units: 98,
    entitled: 100,
    status: 'warning',
  },
  {
    id: 'org-6',
    label: 'Organization 6',
    units: 20,
    entitled: 100,
    status: '',
  },
];

export const VsmHubUsage = () => {
  const { setNavList, setGoBack, setBackItem } = useNavListContext();
  const navigate = useNavigate();

  useEffect(() => {
    setNav();
  }, [setNavList]);

  const setNav = () => {
    setNavList(checkSelectedItem(1, productLevelNav));

    setBackItem({
      ...agilityBack,
      onClick: () => navigate('/'),
    });
    setGoBack(true);
  };

  const handleDetails = (event) => {
    console.log(event);
  };

  const columns: Array<{ id: string; label: string }> = [
    { id: 'label', label: 'Organization' },
    { id: 'units', label: 'Units' },
    { id: 'entitled', label: 'Entitled' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions' },
  ];

  const defaultData = dfps.map((dfp) => {
    return {
      rowData: {
        label: (
          <Grid container alignItems="center">
            <DotAvatar
              size="medium"
              type="image"
              iconId="file-image"
              alt={`${dfp.id}`}
            />
            <span className="label">{dfp.label}</span>
          </Grid>
        ),
        units: dfp.units,
        entitled: dfp.entitled,
        status: dfp.status && (
          <StyledStatusIcon
            className={`${iconClassName} ${dfp.status}`}
            iconId={`${dfp.status}-solid`}
          />
        ),
        actions: dfp.id && (
          <>
            <DotButton
              size="small"
              type="outlined"
              onClick={() => handleDetails(dfp)}
            >
              Details
            </DotButton>
            {/* Hooked this up because it could be useful but leaving it commented out for now */}
            {/* We decided to leave delete out of designs because it could be problematic for running demos */}
            {/* <DotIconButton iconId="delete" onClick={() => onDelete(tool)} /> */}
          </>
        ),
      },
    };
  });

  const options = {
    legend: {
      right: 0,
      top: 0,
      icon: 'circle',
      data: ['Agility', 'Release', 'Risk prediction'],
    },
    grid: { top: 40, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Sep 20', 'Nov 20', 'Dec 20', 'Jan 21', 'Feb 21', 'Mar 20'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Agility',
        type: 'bar',
        data: [480, 320, 200, 220, 321, 600],
        itemStyle: { color: '#4b5a6f' },
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

  const seriesData = [
    {
      name: 'Agility',
      type: 'bar',
      stack: 'total',
      itemStyle: { color: '#4b5a6f' },
      data: [600],

      markLine: {
        symbol: 'none',
        data: [
          {
            xAxis: 500,
            symbol: 'none',
            lineStyle: {
              color: '#000000',
              width: 2,
              type: 'solid',
            },
          },
        ],
      },
    },
  ];

  return (
    <VsmHubPageSection>
      <Grid container spacing={2}>
        <Grid item sm={9}>
          <DotCard>
            <>
              <DotCardHeader title="DFP Utilization" />
              <DotCardContent>
                <ReactECharts option={options} />
              </DotCardContent>
            </>
          </DotCard>
          <StyledTableCard className={tableCardClassName}>
            <>
              <DotCardHeader title="Digital.ai Flex Points (DFPs)" />
              <DotCardContent>
                <DotTable
                  columns={columns}
                  data={defaultData}
                  ariaLabel="Digital Flex Points"
                />
              </DotCardContent>
            </>
          </StyledTableCard>
        </Grid>
        <Grid item sm={3}>
          <VsmHubToolDfps used={600} total={500} seriesData={seriesData} />
        </Grid>
      </Grid>
    </VsmHubPageSection>
  );
};
