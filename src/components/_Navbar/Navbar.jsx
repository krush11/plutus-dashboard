import { createStyles, Navbar, Group, Text } from '@mantine/core';
import {
  BellRinging, Logout, SwitchHorizontal, Dashboard, LayoutGridAdd
} from 'tabler-icons-react';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
      borderRadius: theme.radius.md,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        textDecoration: 'none',
        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});

const data = [
  { label: 'Dashboard', icon: Dashboard },
  { label: 'Holdings', icon: LayoutGridAdd },
  { label: 'Scans', icon: BellRinging }
];

export function NavbarSimple({ activeTab, setActiveTab }) {
  const { classes, cx } = useStyles();

  const links = data.map((item) => (
    <Text className={cx(classes.link, 'cursor-pointer', { [classes.linkActive]: item.label.toLowerCase() === activeTab.toLowerCase() })}
      my='xs' key={item.label} onClick={(event) => {
        event.preventDefault();
        setActiveTab(item.label);
      }}>
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Text>
  ));

  return (
    <Navbar width={{ base: 350 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} >
          <BellRinging />
          <Text tt='uppercase'>Plutus</Text>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Text className={classes.link} onClick={(event) => event.preventDefault()}>
          <SwitchHorizontal className={classes.linkIcon} />
          <span>Change account</span>
        </Text>

        <Text className={classes.link} onClick={(event) => event.preventDefault()}>
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </Text>
      </Navbar.Section>
    </Navbar>
  );
}