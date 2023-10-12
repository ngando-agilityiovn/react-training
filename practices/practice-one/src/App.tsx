import Modal from './components/Modal';

import { BUTTON_VARIANT } from '@/types';

const App = () => {
  return (
    <div>
      Hello World
      <Modal
        className='dd'
        title='Add user'
        variantNegative={BUTTON_VARIANT.SECONDARY}
        negativeLabel='Cancel'
        variantPosition={BUTTON_VARIANT.PRIMARY}
        positiveLabel='Confirm'
        onClose={() => {
          alert('Button component');
        }}
        onSubmit={() => {
          alert('Button component');
        }}
      />
    </div>
  );
};

export default App;
