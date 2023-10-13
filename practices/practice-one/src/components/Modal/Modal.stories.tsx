import { Meta } from '@storybook/react';
import { useCallback, useState } from 'react';

// Components
import { Modal } from '.';
import { Button } from '..';

// Types
import { BUTTON_VARIANT } from '@/types';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

const ModalWithHooks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div>
      <Button variant={BUTTON_VARIANT.PRIMARY} onClick={handleClick}>
        Open Modal
      </Button>

      {isOpen && (
        <Modal onClose={handleClose} title={'Do you want to delete this user?'}>
          <div className=''>Content Modal</div>
        </Modal>
      )}
    </div>
  );
};

export const Default = {
  render: () => ModalWithHooks()
};
