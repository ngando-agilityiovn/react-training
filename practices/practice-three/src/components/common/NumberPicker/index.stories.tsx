import Storybook from '@storybook/react';
import { useState } from 'react';

// Components
import NumberPicker from '.';

export default {
  title: 'Components/NumberPicker',
  component: NumberPicker
} as Storybook.ComponentMeta<typeof NumberPicker>;

const Template: Storybook.ComponentStory<typeof NumberPicker> = () => {
  const [quantity, setQuantity] = useState(10);
  return (
    <NumberPicker
      quantity={quantity}
      onDecrease={() => setQuantity(quantity - 1)}
      onIncrease={() => setQuantity(quantity + 1)}
      onChangeQuantity={(e) => setQuantity(parseInt(e.target.value))}
    />
  );
};

export const NumberPickerComponent = Template.bind({});
