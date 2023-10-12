import { ReactNode } from 'react';

// Types
import { BUTTON_VARIANT } from '@/types';

// Styles
import styles from './index.module.css';

// Components
import { Button } from '..';

interface IProps {
  title: string;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<IProps> = ({ children, title, onClose }) => {
  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          <Button variant={BUTTON_VARIANT.ICON} onClick={onClose}>
            x
          </Button>
        </div>
        {children}
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};
