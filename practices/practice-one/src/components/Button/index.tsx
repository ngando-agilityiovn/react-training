// styles
import { ReactNode } from 'react';
import buttonStyles from './index.module.css';

// enums
import { BUTTON_VARIANT } from '~/types';

interface ButtonProps extends HTMLButtonElement {
  variant?: BUTTON_VARIANT;
  isDisable?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = BUTTON_VARIANT.PRIMARY,
  children,
  type = 'button',
  isDisable = false,
  className,
  onClick
}) => {
  return (
    <button
      type={type}
      disabled={isDisable}
      onClick={onClick}
      className={`${buttonStyles.btn} ${buttonStyles[variant]} ${className}`}
    >
      {children as ReactNode}
    </button>
  );
};
export default Button;
