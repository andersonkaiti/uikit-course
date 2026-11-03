import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="http://github.com/andersonkaiti.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
