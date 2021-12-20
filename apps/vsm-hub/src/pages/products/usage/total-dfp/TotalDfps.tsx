import React, { useEffect } from 'react';
import {
  DotCardContent,
  DotCardHeader,
  DotList,
} from '@digital-ai/dot-components';
import { Divider, Grid, ListItem, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { StyledTotalDFpsCard, rootClassName } from './TotalDfps.styles';

export interface ToolDfpsProps {
  assigned?: number;
  available?: number;
  dfps?: number;
  max?: number;
  seriesData?: Array<any>;
  total?: number;
  used?: number;
}

export const VsmHubToolDfps = ({
  seriesData,
  max,
  used = 520,
  dfps = 300,
  assigned = 600,
  total = 700,
  available = 0,
}: ToolDfpsProps) => {
  useEffect(() => {}, [used, dfps, available, assigned, total, seriesData]);

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    grid: {
      height: 50,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      max: total + 100,
    },
    yAxis: {
      data: [''],
    },
    series: seriesData,
  };
  return (
    <StyledTotalDFpsCard className={rootClassName}>
      <>
        <DotCardHeader title="DFP Pool" subheader="Digital.ai Flex Points" />
        <DotCardContent>
          <>
            <ReactECharts
              option={options}
              style={{ height: '70px', width: '100%' }}
            />
            <div className="dfp-list">
              <DotList component="ul" dense={false}>
                <>
                  <ListItem component="li">
                    <Grid container justify="space-between">
                      <Typography variant="h4">Total DFP's</Typography>
                      <Typography variant="h4">{total}</Typography>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem component="li">
                    <Grid container justify="space-between">
                      <Typography>Used</Typography>
                      <Typography>{dfps} </Typography>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem component="li">
                    <Grid container justify="space-between">
                      <Typography>Available</Typography>
                      <Typography>{total - dfps}</Typography>
                    </Grid>
                  </ListItem>
                </>
              </DotList>
            </div>
          </>
        </DotCardContent>
      </>
    </StyledTotalDFpsCard>
  );
};
