import { Button, TextField } from './components';
import { BUTTON_VARIENT } from './types';

const App = () => {
  return (
    <div>
      Hello World
      <TextField label='Avartar' name='url' type='url' placeholder='Image...' />
      <Button varient={BUTTON_VARIENT.SECONDARY} children='Confirm' />
    </div>
  );
};

export default App;
