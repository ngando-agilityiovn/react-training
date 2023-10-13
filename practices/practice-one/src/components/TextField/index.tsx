import { InputHTMLAttributes } from 'react';

// Styles
import textFieldStyles from './index.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextField: React.FC<IProps> = ({ label, value, name, onChange, placeholder, defaultValue }) => {
  return (
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
};
