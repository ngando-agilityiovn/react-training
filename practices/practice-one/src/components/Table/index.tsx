import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

interface ITableProps {
  children: ReactNode;
}

export const Table: React.FC<ITableProps> = ({ children }) => <div className={styles.mainTable}>{children}</div>;
