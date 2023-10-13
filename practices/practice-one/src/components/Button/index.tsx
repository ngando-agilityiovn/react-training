import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

// Types
import { BUTTON_VARIANT } from '@/types';

interface IProps {
  children: ReactNode;
  variant: BUTTON_VARIANT;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({ variant = BUTTON_VARIANT.PRIMARY, children, className, onClick }) => (
  <button onClick={onClick} className={`${styles.btn} ${styles[variant]} ${className}`}>
    {children}
  </button>
);
