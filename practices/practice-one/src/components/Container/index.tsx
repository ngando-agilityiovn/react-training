import { HTMLAttributes } from 'react';

// Styles
import styles from './index.module.css';

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<IContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
