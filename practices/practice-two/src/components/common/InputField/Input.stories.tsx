import { Input } from '@chakra-ui/react'
import { Meta, StoryObj } from '@storybook/react'

// Components
import InputField from '.'

export default {
  title: 'Component/Input',
  component: InputField,
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Project name',
    name: 'name',
    type: 'text',
    errorMessage: 'Please enter the name of the project',
    placeholder: '',
  },
}

export const EstimationInput: Story = {
  args: {
    label: 'Estimation',
    name: 'name',
    type: 'number',
    errorMessage: 'Please enter the estimation of the project',
    placeholder: '00.00',
    children: 'US$',
  },
}
