// Utilities
import { combineClasses } from '@/utils';

// Styles
import styles from './index.module.css';

interface SelectOptionProps {
  title: string;
  value: string;
  className?: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const SelectOption = ({ title, value, options, onChange }: SelectOptionProps) => {
  return (
    <div className={combineClasses([styles.selectOption])}>
      <label className={styles.label}>{title}</label>

      {options.map(({ label, value: optionValue }) => (
        <div
          key={optionValue}
          className={combineClasses([styles.options, value === optionValue ? styles.selected : ''])}
          onClick={() => onChange(optionValue)}
        >
          <p className={styles.optionsText}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectOption;
