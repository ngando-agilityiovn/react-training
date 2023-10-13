import { ReactNode, memo, useRef } from 'react';

// Types
import { BUTTON_VARIANT } from '@/types';

// Styles
import styles from './index.module.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Close } from '../Icons';
import { Button } from '..';

// Components

interface IProps {
  title: string;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<IProps> = memo(({ children, title, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose);

  return (
    <div>
      <div ref={ref} className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>{title}</h2>
          <Button className={styles.btnClose} variant={BUTTON_VARIANT.ICON} onClick={onClose}>
            <Close />
          </Button>
        </div>
        {children}
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
});
