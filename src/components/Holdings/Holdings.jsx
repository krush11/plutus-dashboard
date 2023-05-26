import { Autocomplete, Button, Group, NativeSelect, NumberInput, Title } from '@mantine/core'
import React from 'react'
import { Plus } from 'tabler-icons-react'

export default function Holdings() {
  return (
    <div>
      <Group display='block' mb='xl'>
        <Title order={3} mb='lg'>Add trade</Title>
        <Group bg='gray' p='sm' position='apart'>
          <Group>
            <Autocomplete label='Symbol' data={[]} limit={5} />
            <NativeSelect label='Segment'  w='150px' data={["Equity", "NFO"]} required />
            <NumberInput label='Quantity' w='150px' required />
            <NumberInput label='Avg. price' w='150px' required />
            <NumberInput label='Stoploss' w='150px' />
            <NumberInput label='Target' w='150px' />
          </Group>
          <Button leftIcon={<Plus size={20} height='fit-content' />}>
            Add trade
          </Button>
        </Group>
      </Group>
      <Group>
        <Title order={3} mb='lg'>Open trades</Title>
      </Group>
    </div>
  )
}
