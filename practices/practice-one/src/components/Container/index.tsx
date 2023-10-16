import { HTMLAttributes } from 'react';

// Styles
import styles from './index.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children }: ContainerProps) => <div className={styles.container}>{children}</div>;
