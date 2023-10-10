// styles
import { InputHTMLAttributes } from 'react';
import textFieldStyles from './index.module.css';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  name: string;
  onChange?: () => void;
  placeholder: string;
  defaultValue?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, name, onChange, placeholder, defaultValue }) => {
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

export default TextField;
