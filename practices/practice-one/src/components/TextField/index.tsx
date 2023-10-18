import { InputHTMLAttributes } from 'react';

// Styles
import textFieldStyles from './index.module.css';

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ label, value, name, onChange, placeholder, defaultValue }) => (
  <div className={textFieldStyles.textField}>
    <label>
      {label} <span className={textFieldStyles.obligatoryIcon}>*</span>
    </label>
    <input
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      className={textFieldStyles.input}
    />
  </div>
);
