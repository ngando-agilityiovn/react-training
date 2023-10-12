import { ReactNode } from 'react';

// styles
import buttonStyles from './index.module.css';

// enums
import { BUTTON_VARIANT } from '~/types';

interface ButtonProps {
  children: ReactNode;
  variant: BUTTON_VARIANT;
  className?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = BUTTON_VARIANT.PRIMARY,
  children,
  className,
  onClick,
  ...props
}) => (
  <button onClick={onClick} className={`${buttonStyles.btn} ${buttonStyles[variant]} ${className}`} {...props}>
    {children}
  </button>
);
