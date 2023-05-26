import { createStyles, Grid, Group, Text, Title, Tooltip } from '@mantine/core'
import { ArrowNarrowRight } from 'tabler-icons-react';


export default function Scans() {
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
      <Title order={3} mb='lg'>Select a catagory</Title>
      <Grid grow columns={14}>
        <Grid.Col id='dailypnl' p='md' span={3} m='sm' className={cx(classes['meta-card'], 'cursor-pointer')} >
          <Group position='apart' >
            <Title order={5} tt='uppercase'>Fundamental</Title>
            <ArrowNarrowRight />
          </Group>
            <Text fz='sm'>Scans based on the instrinsic value</Text>
        </Grid.Col>
        <Grid.Col id='totalpnl' p='md' span={3} m='sm' className={cx(classes['meta-card'], 'cursor-pointer')} >
          <Group position='apart' >
            <Title order={5} tt='uppercase'>Technical</Title>
            <ArrowNarrowRight />
          </Group>
            <Text fz='sm'>Scans based on indicators</Text>
        </Grid.Col>
        <Grid.Col id='totalpnl' p='md' span={3} m='sm' className={cx(classes['meta-card'], 'cursor-pointer')} >
          <Group position='apart' >
            <Title order={5} tt='uppercase'>Future and Options</Title>
            <ArrowNarrowRight />
          </Group>
            <Text fz='sm' color='#FF9900'>Comming soon!</Text>
        </Grid.Col>
      </Grid>
    </div>
  )
}
