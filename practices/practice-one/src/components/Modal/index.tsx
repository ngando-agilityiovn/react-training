import { ReactNode } from 'react';

// Styles
import styles from './index.module.css';

// Components
import { Button } from '..';

// Types
import { BUTTON_VARIANT } from '@/types';

interface ModalProps {
  children?: ReactNode;
  title: string;
  className: string;
  variantNegative: BUTTON_VARIANT;
  variantPosition: BUTTON_VARIANT;
  negativeLabel: string;
  positiveLabel: string;
  onClose: () => void;
  onSubmit: () => void;
}

export const Modal = ({
  children,
  title,
  variantNegative,
  variantPosition,
  negativeLabel,
  positiveLabel,
  onClose,
  onSubmit
}: ModalProps) => {
  return (
    <div>
      <div
        className={`${styles.modal}`}
        onClick={() => {
          onClose();
        }}
      >
        <div className={`${styles.modalHeader}`}>
          <h2 className={`${styles.title}`}>{title}</h2>
          <div>x</div>
        </div>

        {children}

        <div className={`${styles.modalFooter}`}>
          <Button className={`${styles.btn}`} onClick={onSubmit} variant={variantNegative}>
            {negativeLabel}
          </Button>
          <Button variant={variantPosition}>{positiveLabel}</Button>
        </div>
      </div>
      <div className={`${styles.overlay}`}></div>
    </div>
  );
};
