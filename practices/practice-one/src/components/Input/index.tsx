// styles
import inputStyles from './index.module.css';

interface IconProps {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange: () => void;
  placeholder?: string;
  defaultValue?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
  defaultValue,
  size,
  ...props
}) => {
  return (
    <form className={`${inputStyles.form}`}>
      <label>
        {label} <span className={`${inputStyles.obligatoryIcon}`}>*</span>
      </label>
      <input
        name={name}
        value={defaultValue ? defaultValue : value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        className={`${inputStyles.input}`}
        {...props}
      />
    </form>
  );
};

export default Icon;
