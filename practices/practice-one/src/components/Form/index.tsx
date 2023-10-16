import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

interface IProps {
  children: ReactNode;
}

export const Form: React.FC<IProps> = ({ children }) => {
  return <div className={styles.form}>{children}</div>;
};
