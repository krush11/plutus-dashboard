import { createStyles, Grid, Title, Tooltip } from '@mantine/core'
import React, { useEffect, useState } from 'react'


export default function Dashboard() {
  const [dailyPnL, setDailyPnL] = useState((Math.random() * 100 - Math.random() * 100).toFixed(2));
  const [totalPnL, setTotalPnL] = useState((Math.random() * 1000 - Math.random() * 1000).toFixed(2));
  const [capital, setCapital] = useState((Math.floor(Math.random() * 10000)).toFixed(2));
  const [ss, setSS] = useState((Math.random() * 10000).toFixed(2));

  useEffect(() => {
    const interval = setInterval(() => {
      setDailyPnL((Math.random() * 100 - Math.random() * 100).toFixed(2));
      setTotalPnL((Math.random() * 1000 - Math.random() * 1000).toFixed(2));
      setCapital((Math.random() * 10000).toFixed(2));
      setSS((Math.random() * 10000).toFixed(2));
      document.getElementById('dailypnl').style.backgroundColor = dailyPnL >= 0 ? '#28C869' : '#DC2323';
      document.getElementById('totalpnl').style.backgroundColor = totalPnL >= 0 ? '#28C869' : '#DC2323';
      document.getElementById('ss').style.backgroundColor = ss >= 0 ? '#28C869' : '#DC2323';
    }, 3000);
    return () => clearInterval(interval);

  });


  const useStyles = createStyles((theme, _params, getRef) => {
    return {
      'meta-card': {
        borderRadius: theme.radius.sm,
        backgroundColor: '#3700B3',
        color: '#fff',
      },
      'meta-card-data': {
        fontSize: '3.5rem',
        fontWeight: 700,
      }
    };
  });
  const { classes, cx } = useStyles();

  return (
    <div>
      <Title order={3} mb='lg'>Hi Krushnal, Welcome back! </Title>
      <Grid grow columns={14}>
        <Tooltip label='Da' color='blue' withArrow position='top-end'>
          <Grid.Col id='dailypnl' p='sm' span={3} m='sm' className={cx(classes['meta-card'])} >
            <Title order={6} mb='xl' tt='uppercase'>Daily {dailyPnL > 0 ? "Profit" : "Loss"}</Title>
            <Title inline className={cx(classes['meta-card-data'])}>&#8377;{dailyPnL}</Title>
            {dailyPnL/100}
          </Grid.Col>
        </Tooltip>
        <Tooltip label='Da' color='blue' withArrow position='top-end'>
          <Grid.Col id='totalpnl' p='sm' span={3} m='sm' className={cx(classes['meta-card'])} >
            <Title order={6} mb='xl' tt='uppercase'>Total {totalPnL > 0 ? "Profit" : "Loss"}</Title>
            <Title inline className={cx(classes['meta-card-data'])}>&#8377;{totalPnL}</Title>
            {totalPnL/100}
          </Grid.Col>
        </Tooltip>
        <Tooltip label='Da' color='blue' withArrow position='top-end'>
          <Grid.Col id='ss' p='sm' span={3} m='sm' className={cx(classes['meta-card'])} >
            <Title order={6} mb='xl' tt='uppercase'>Daily Profit</Title>
            <Title inline className={cx(classes['meta-card-data'])}>&#8377;12033</Title>
            {totalPnL/100}
          </Grid.Col>
        </Tooltip>
        <Tooltip label='Da' color='blue' withArrow position='top-end'>
          <Grid.Col id='capital' p='sm' span={3} m='sm' className={cx(classes['meta-card'])} >
            <Title order={6} mb='xl' tt='uppercase'>Capital</Title>
            <Title inline className={cx(classes['meta-card-data'])}>&#8377;{capital}</Title>
            {capital/100}
          </Grid.Col>
        </Tooltip>
      </Grid>
    </div>
  )
}
