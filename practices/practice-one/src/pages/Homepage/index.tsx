// Styles
import homeStyles from './index.module.css';

// Components
import { Table } from '~/components/Table';

const Homepage: React.FC = (): JSX.Element => {
  return (
    <main className={homeStyles.home}>
      <Table />
    </main>
  );
};

export default Homepage;
