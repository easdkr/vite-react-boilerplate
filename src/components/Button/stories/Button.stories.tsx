import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'src/components/Button/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: '버튼',
}
