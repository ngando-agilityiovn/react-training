import { ReactNode, memo, useRef } from 'react';

// Types
import { BUTTON_VARIANT } from '@/types';
import { useOutsideClick } from '@/hooks/useOutsideClick';

// Styles
import styles from './index.module.css';

// Components
import { Button } from '..';
import { Close } from '../Icons';

interface IModalProps {
  title: string;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal = memo(({ children, title, onClose }: IModalProps) => {
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
