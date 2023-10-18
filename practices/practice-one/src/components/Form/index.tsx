import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

interface IFromProps {
  children: ReactNode;
}

export const Form: React.FC<IFromProps> = ({ children }) => <div className={styles.form}>{children}</div>;
