import { Button } from '@components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'components/button',
  component: Button,
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}
