import { ReactNode } from 'react';
import { Button } from '..';
import { BUTTON_VARIANT } from '~/types';
import styles from './index.module.css';

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

const Modal = ({
  children,
  title,
  onClose,
  onSubmit,
  variantNegative,
  variantPosition,
  negativeLabel,
  positiveLabel
}: ModalProps) => {
  return (
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
  );
};

export default Modal;

{
  /* <Modal
 title=Delete"
 actions={
  varriantNegative: BUTTON_VARIANT,
  varriantPositive: BUTTON_VARIANT,
  negativeLabel: "Yes",
  positiveLabel: "No" ,
  }

  actionsanhno={
    <Button variant="BUTTON_VARIAN">Yes</Button>
    <Button variant="BUTTON_VARIAN">No</Button>
  }
/> */
}
