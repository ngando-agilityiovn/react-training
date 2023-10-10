import { ButtonHTMLAttributes, ReactNode } from 'react';

// styles
import buttonStyles from './index.module.css';

// type
type variant = 'primary' | 'secondary' | 'warning' | 'icon';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className }) => {
  return (
    <button className={`${buttonStyles.btn} ${buttonStyles[variant]} ${className}`}>{children as ReactNode}</button>
  );
};

export default Button;
