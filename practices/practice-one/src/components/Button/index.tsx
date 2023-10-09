// styles
import { ButtonHTMLAttributes, ReactNode } from 'react';
import buttonStyles from './index.module.css';

// enums
import { BUTTON_VARIANT } from '~/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANT;
}

const Button: React.FC<ButtonProps> = ({ variant = BUTTON_VARIANT.PRIMARY, children, className, ...rest }) => {
  return (
    <button className={`${buttonStyles.btn} ${buttonStyles[variant]} ${className}`} {...rest}>
      {children as ReactNode}
    </button>
  );
};

export default Button;
