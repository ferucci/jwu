import { ServiceCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    iconBg: { control: { type: 'radio' }, options: ['purple', 'orange'] },
  },
  component: ServiceCard,
  tags: ['autodocs'],
  title: 'Components/Cards/Service-card',
} satisfies Meta<typeof ServiceCard>

export default meta
type Story = StoryObj<typeof meta>

export const ServiceCardDefault: Story = {
  args: {
    icon: 'mobile-bilboards',
    iconBg: 'purple',
    title: 'Mobile Billboards',
  },
}

export const ServiceCardWithText: Story = {
  args: {
    icon: 'mobile-bilboards',
    iconBg: 'orange',
    text: 'Advertising on mobile billboards for your business',
    title: 'Mobile Billboards',
  },
}
