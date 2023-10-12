import { Button } from '@components';
import { BUTTON_VARIANT } from '@types';

export const App = () => {
  return (
    <div>
      <Button
        variant={BUTTON_VARIANT.WARNING}
        onClick={() => {
          alert('Button component');
        }}
      >
        Lorem ipsum dolor sit.
      </Button>
    </div>
  );
};
