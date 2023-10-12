import { ReactNode } from 'react';

// Styles
import buttonStyles from './index.module.css';

// Types
import { BUTTON_VARIANT } from '@/types/index';

interface IProps {
  children: ReactNode;
  variant: BUTTON_VARIANT;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({ variant = BUTTON_VARIANT.PRIMARY, children, className, onClick }) => (
  <button onClick={onClick} className={`${buttonStyles.btn} ${buttonStyles[variant]} ${className}`}>
    {children}
  </button>
);
