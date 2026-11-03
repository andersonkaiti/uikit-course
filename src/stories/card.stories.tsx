import { Button } from '@components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'components/Card',
  component: Card,
  args: {
    size: 'default',
    className: 'w-80',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'sm'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: Default.render,
}

export const WithAction: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
        <CardAction>
          <Button variant="outline">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
    </Card>
  ),
}
