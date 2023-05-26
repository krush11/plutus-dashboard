import { AppShell, Box, Loader, LoadingOverlay, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Search } from 'tabler-icons-react';
import Dashboard from './components/Dashboard/Dashboard';
import Holdings from './components/Holdings/Holdings';
import Scans from './components/Scans/Scans';
import { NavbarSimple } from './components/_Navbar/Navbar';


function renderActiveComponent(activeTab) {
  switch (activeTab) {
    case 'Dashboard':
      return <Dashboard />
      case 'Holdings':
      return <Holdings />
      case 'Scans':
      return <Scans />
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        // primaryColor: '#3700B3',
        globalStyles: (theme) => ({
          '.cursor-pointer': {
            cursor: 'pointer'
          },
        })
      }}>
      <AppShell padding='0' layout='alt' header={<></>}
        navbar={<NavbarSimple activeTab={activeTab} setActiveTab={setActiveTab} />}>
        <Box pos='relative' h='100%' p='md'>
          <LoadingOverlay visible={false} loader={<Loader variant='bars' />} />
          <Box><Search /></Box>
          <Box py='xl' px='xl'>
            {renderActiveComponent(activeTab)}
          </Box>
        </Box>
      </AppShell>
    </MantineProvider >
  )
}
