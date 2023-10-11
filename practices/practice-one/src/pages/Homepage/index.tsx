import { EmailInformation, Phone, Profile, Status } from '~/components';

// Styles
import homeStyles from './index.module.css';

const Homepage: React.FC = (): JSX.Element => {
  return (
    <main className={homeStyles.home}>
      <div className='row'>
        <div className={homeStyles.column}>
          <div className={homeStyles.card}>
            <Profile />
          </div>
        </div>

        <div className={homeStyles.column}>
          <div className={homeStyles.card}>
            <EmailInformation />
          </div>
        </div>

        <div className={homeStyles.column}>
          <div className={homeStyles.card}>
            <Phone />
          </div>
        </div>

        <div className={homeStyles.column}>
          <div className={homeStyles.card}>
            <Status />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Homepage;
