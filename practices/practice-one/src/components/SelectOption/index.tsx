// Utilities
import { combineClasses } from '@/utils';

// Styles
import styles from './index.module.css';

interface ISelectOptionProps {
  title: string;
  value: string;
  className?: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const SelectOption = ({ title, value, options, onChange }: ISelectOptionProps) => (
  <div className={styles.selectOption}>
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
