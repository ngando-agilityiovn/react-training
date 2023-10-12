import { Button } from '@/components';
import { BUTTON_VARIANT } from '@/types';

const App = () => {
  return (
    <>
      <Button
        variant={BUTTON_VARIANT.WARNING}
        onClick={() => {
          alert('Button component');
        }}
      >
        Lorem ipsum dolor sit.
      </Button>
    </>
  );
};

export default App;
