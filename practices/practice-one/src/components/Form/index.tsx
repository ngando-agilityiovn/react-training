import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

interface IFromProps {
  children: ReactNode;
}

export const Form = ({ children }: IFromProps) => <div className={styles.form}>{children}</div>;
