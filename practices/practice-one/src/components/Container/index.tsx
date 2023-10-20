import { HTMLAttributes } from 'react';

// Styles
import styles from './index.module.css';

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children }: IContainerProps) => <div className={styles.container}>{children}</div>;
