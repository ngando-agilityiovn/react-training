import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

// Types
import { BUTTON_VARIANT } from '@/types';

// Utilities
import { combineClasses } from '@/utils';

interface IButtonProps {
  children: ReactNode;
  variant?: BUTTON_VARIANT;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ variant = BUTTON_VARIANT.PRIMARY, children, onClick }: IButtonProps) => (
  <button onClick={onClick} className={combineClasses([styles.btn, styles[variant]])}>
    {children}
  </button>
);
