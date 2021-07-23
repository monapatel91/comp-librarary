import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  DotActionToolbar,
  DotButton,
  DotCard,
  DotCardContent,
  DotCardHeader,
} from '@digital-ai/dot-components';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useNavListContext } from '../../context/NavigationContext';
import { VsmHubPageSection } from '../../dot-components/layouts/styled-page/PageSection';
import { accountBack, accountLevelNav } from '../../routes/routes';
import { VsmHubToolDfps } from '../products/usage/total-dfp/TotalDfps';
import {
  iconClassName,
  StyledStatusIcon,
  StyledTableCard,
  tableCardClassName,
} from '../products/usage/Usage.styles';
import {
  StyledVsmInput,
  rootClassName,
  tableCellClassName,
  StyledTableCell,
} from './Account.styles';
import { useDelay } from '../../dot-components/hooks/useDelay';
import { DotMessage } from '../../dot-components/message/Message';
import { DotProgressIcon } from '../../dot-components/progress-icon/ProgressIcon';
import { useHistory } from 'react-router';

function createData(
  capabilities: { id: string; label: string; desc: string },
  units: number,
  entitled: number,
  dfps: number,
  status: string,
  subscribed: boolean
) {
  return { capabilities, units, entitled, dfps, status, subscribed };
}

const rows = [
  createData(
    { id: 'agility', label: 'Agility', desc: '1 DFP = 4 users' },
    45,
    75,
    300,
    '',
    true
  ),
  createData(
    { id: 'release', label: 'Release', desc: '1 DFP = 1 User Release' },
    20,
    50,
    50,
    '',
    true
  ),
  createData(
    {
      id: 'risk-prediction',
      label: 'Risk Prediction',
      desc:
        '100 DFPs = 1 SMPO Small Solution, 150 DFPs = 1 SMPO Medium Solution, 200 DFPs = 1 SMPO Large Solution',
    },
    0,
    null,
    null,
    '',
    false
  ),
  createData(
    { id: 'deploy', label: 'deploy', desc: '1 DFP = 1 Node Deploy' },
    0,
    null,
    null,
    '',
    false
  ),
  createData(
    {
      id: 'Continuous testing',
      label: 'Continuous testing',
      desc: '13 DFPs = 10 Concurrant Emulator/Simulator Subscriptions',
    },
    0,
    null,
    null,
    '',
    false
  ),
  createData(
    {
      id: 'app-protection',
      label: 'App Protection',
      desc:
        '75 DFPs = 1 App/Platform combo of App Protect for Mobile & Desktop Apps',
    },
    0,
    null,
    null,
    '',
    false
  ),
  createData(
    {
      id: 'app-aware',
      label: 'App Aware',
      desc: '1 DFP = 40 EASE User Licenses',
    },
    0,
    null,
    null,
    '',
    false
  ),
  createData(
    {
      id: 'serive-managment',
      label: 'Service Management Process Optimization',
      desc:
        '100 DFPs = 1 SMPO Small Solution, 150 DFPs = 1 SMPO Medium Solution, 200 DFPs = 1 SMPO Large Solution',
    },
    0,
    null,
    null,
    '',
    false
  ),
];

const initialSeriesData = [
  {
    id: 'agility',
    name: 'Agility',
    type: 'bar',
    stack: 'total',
    itemStyle: { color: '#4b5a6f' },
    data: [300],
  },
  {
    id: 'release',
    name: 'Release',
    type: 'bar',
    stack: 'total',
    itemStyle: { color: '#c1c6cd' },
    data: [50],
    markLine: {
      symbol: 'none',
      data: [
        {
          xAxis: 700,
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

export const VsmAccount = () => {
  const { navList, setNavList, setGoBack, setBackItem } = useNavListContext();
  const [open, setOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [seriesData, setSeriesData] = useState(initialSeriesData);

  const history = useHistory();

  useDelay(5000, [open], setMessageOpen);

  useEffect(() => {
    setNavList(accountLevelNav);
    setNav();
  }, [setBackItem]);

  useEffect(() => {
    setMessageOpen(false);
  }, [setMessageOpen]);

  const setNav = () => {
    setBackItem({
      ...accountBack,
      onClick: () => history.push('/'),
    });
    setGoBack(true);
  };

  // temp dat

  const [data, setData] = useState(rows);

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
      data: ['Oct 20', 'Nov 20', 'Dec 20', 'Jan 21', 'Feb 21', 'Mar 21'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Agility',
        type: 'bar',
        stack: 'total',
        data: [480, 320, 200, 220, 321, 300],
        itemStyle: { color: '#4b5a6f' },
        smooth: true,
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: 'Release',
        type: 'bar',
        stack: 'total',
        data: [64, 34, 54, 60, 45, 50],
        itemStyle: { color: '#c1c6cd' },
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

  const handleView = () => {
    history.push('/product/agility');
  };

  const handleEdit = (item) => {
    setOpen(true);
    setEditing(item);
  };

  const handleAdd = (item) => {
    setOpen(true);
    setEditing(item);
  };

  const handleChange = (type: string, value: string) => {
    setEditing({
      ...editing,
      [type]: +value,
    });
  };

  const handleCancel = () => {
    setEditing(null);
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log(editing);
    const newData = data.map((item) => {
      if (editing.capabilities.id === item.capabilities.id) {
        return {
          ...item,
          ...editing,
          subscribed: true,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    const newSeriesData = seriesData.map((item: any) => {
      console.log(item, editing);
      if (editing.capabilities.id === item.id) {
        item.data[0] = 369;
      }
      return item;
    });
    console.log(newSeriesData);
    setSeriesData(newSeriesData);
    setData(newData);
    setEditing(null);
    setOpen(false);
    setMessageOpen(true);
  };

  return (
    <>
      <DotActionToolbar>
        <Grid container justify="space-between">
          <Typography variant="h1">Account acc-1</Typography>
          <DotButton size="small">Add DPF's</DotButton>
        </Grid>
      </DotActionToolbar>
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
                <DotCardHeader title="DFP Allocation" />

                <DotCardContent>
                  <>
                    <DotMessage
                      startIcon={
                        <DotProgressIcon
                          processing={false}
                          iconId="check-solid"
                          status="success"
                        />
                      }
                      status="success"
                      open={messageOpen}
                      title="Update successful"
                    ></DotMessage>
                    <TableContainer>
                      <Table aria-label="DFPs">
                        <TableHead>
                          <TableRow>
                            <TableCell>Capabilities</TableCell>
                            <TableCell align="right">Units used</TableCell>
                            <TableCell align="right">Entitled</TableCell>
                            <TableCell align="right">DFP's</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((row) => (
                            <TableRow key={row.capabilities.id}>
                              <TableCell component="th" scope="row">
                                <Typography variant="h4">
                                  {row.capabilities.label}
                                </Typography>
                                <Typography variant="body2">
                                  {row.capabilities.desc}
                                </Typography>
                              </TableCell>
                              <TableCell align="right">{row.units}</TableCell>
                              <TableCell align="right">
                                {editing &&
                                row.capabilities.id ===
                                  editing.capabilities.id ? (
                                  <StyledVsmInput
                                    size="small"
                                    onChange={(event) =>
                                      handleChange(
                                        'entitled',
                                        event.currentTarget.value
                                      )
                                    }
                                    className={rootClassName}
                                    label="Entitled"
                                    name={editing.id}
                                    id={editing.id}
                                    defaultValue={editing.entitled}
                                  />
                                ) : (
                                  row.entitled
                                )}
                              </TableCell>
                              <TableCell align="right">
                                {editing &&
                                row.capabilities.id ===
                                  editing.capabilities.id ? (
                                  <StyledVsmInput
                                    size="small"
                                    onChange={(event) =>
                                      handleChange(
                                        'dfps',
                                        event.currentTarget.value
                                      )
                                    }
                                    className={rootClassName}
                                    label="DFP's"
                                    name={editing.id}
                                    id={editing.id}
                                    defaultValue={editing.dfps}
                                  />
                                ) : (
                                  row.dfps
                                )}
                              </TableCell>
                              <TableCell align="right">
                                {row.status && (
                                  <StyledStatusIcon
                                    className={`${iconClassName} ${row.status}`}
                                    iconId={`${row.status}-solid`}
                                  />
                                )}
                              </TableCell>
                              <StyledTableCell
                                className={tableCellClassName}
                                align="right"
                              >
                                {editing &&
                                row.capabilities.id ===
                                  editing.capabilities.id ? (
                                  <div className="action-buttons">
                                    <DotButton
                                      size="small"
                                      onClick={() => handleSubmit()}
                                    >
                                      Save
                                    </DotButton>
                                    <DotButton
                                      onClick={() => handleCancel()}
                                      size="small"
                                      type="text"
                                    >
                                      cancel
                                    </DotButton>
                                  </div>
                                ) : row.subscribed ? (
                                  <div className="action-buttons">
                                    <DotButton
                                      onClick={() => handleEdit(row)}
                                      size="small"
                                      type="text"
                                    >
                                      Edit
                                    </DotButton>
                                    <DotButton
                                      onClick={() => handleView()}
                                      size="small"
                                    >
                                      View
                                    </DotButton>
                                  </div>
                                ) : (
                                  <DotButton
                                    size="small"
                                    type="outlined"
                                    onClick={() => handleAdd(row)}
                                  >
                                    Add
                                  </DotButton>
                                )}
                              </StyledTableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                </DotCardContent>
              </>
            </StyledTableCard>
          </Grid>
          <Grid item sm={3}>
            <VsmHubToolDfps
              dfps={data.reduce((acc: any, item: any) => {
                return item.dfps + acc;
              }, 0)}
              used={data.reduce((acc: any, item: any) => {
                return item.units + acc;
              }, 0)}
              available={data.reduce((acc: any, item: any) => {
                return item.dfps + acc;
              }, 0)}
              seriesData={seriesData}
              total={700}
            />
          </Grid>
        </Grid>
      </VsmHubPageSection>
    </>
  );
};
