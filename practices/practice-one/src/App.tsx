import Modal from './components/Modal';

import { BUTTON_VARIANT } from '~/types';
import Homepage from './pages/Homepage';

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
      <Homepage />
    </div>
  );
};

export default App;
