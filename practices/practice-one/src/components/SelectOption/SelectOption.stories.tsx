import { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';

// Components
import { SelectOption } from '.';

const optionsData = [
  {
    label: 'True',
    value: 'True'
  },
  {
    label: 'False',
    value: 'False'
  },
  {
    label: 'None',
    value: 'None'
  }
];

const Preview = () => {
  const [option, setOption] = useState('html/css');

  return <SelectOption title='Select an option:' value={option} options={optionsData} onChange={setOption} />;
};

export default {
  title: 'Components/SelectOption',
  component: Preview
} as Meta;

type Story = StoryObj<typeof SelectOption>;

export const Basic: Story = {
  args: {
    onChange: (value) => value,
    options: optionsData,
    value: 'None'
  }
};
