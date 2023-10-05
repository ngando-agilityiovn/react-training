// styles
import { ReactNode } from 'react';
import buttonStyles from './index.module.css';

// enums
import { BUTTON_VARIENT } from '~/types';

interface ButtonProps {
  children: ReactNode;
  varient: BUTTON_VARIENT;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  varient = BUTTON_VARIENT.PRIMARY,
  children,
  className,
  onClick,
  ...props
}) => (
  <button onClick={onClick} className={`${buttonStyles.btn} ${buttonStyles[varient]} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
