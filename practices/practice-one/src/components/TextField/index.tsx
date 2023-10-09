// styles
import textFieldStyles from './index.module.css';

interface textFieldProps {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: () => void;
  placeholder?: string;
  defaultValue?: string;
  size?: number;
}

const TextField: React.FC<textFieldProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
  defaultValue,
  size,
}) => {
  return (
    <div className={`${textFieldStyles.textField}`}>
      <label>
        {label} <span className={`${textFieldStyles.obligatoryIcon}`}>*</span>
      </label>
      <input
        name={name}
        value={defaultValue ? defaultValue : value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        className={`${textFieldStyles.input}`}
      />
    </div>
  );
};

export default TextField;
