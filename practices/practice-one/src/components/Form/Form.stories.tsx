import { Meta } from '@storybook/react';

// Components
import { Tag, TextField } from '..';

// Types
import { TAG_COLORS } from '@/types';

// Styles
import styles from './index.module.css';

export default {
  title: 'Components/Form',
  component: TextField
} as Meta;

export const Default = () => {
  return (
    <div>
      <TextField label='User name' placeholder='Your name...' />
      <TextField label='Email address' placeholder='example@domain.com' />
      <TextField label='Phone number' placeholder='03495858***' />
      <div className={styles.label}>
        <p>Status</p>
        <select className={styles.input}>
          <option>
            <Tag color={TAG_COLORS.PRIMARY} title='Status' />
          </option>
          <option>
            <Tag color={TAG_COLORS.PRIMARY} title='Status' />
          </option>
          <option>
            <Tag color={TAG_COLORS.PRIMARY} title='Status' />
          </option>
          <option>
            <Tag color={TAG_COLORS.PRIMARY} title='Status' />
          </option>
          <option>
            <Tag color={TAG_COLORS.PRIMARY} title='Status' />
          </option>
        </select>
      </div>
    </div>
  );
};
