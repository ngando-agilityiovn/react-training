import { Header, Info } from '~/components';
import homeStyles from './index.module.css';

const Homepage: React.FC = (): JSX.Element => (
  <main className={homeStyles.home}>
    <section>
      <Header />
    </section>
    <section>
      <Info />
    </section>
  </main>
);

export default Homepage;
