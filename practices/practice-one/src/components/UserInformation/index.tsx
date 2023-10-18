// Styles
import styles from './index.module.css';

interface IUserInformationProps {
  image: string;
  name: string;
  description?: string;
}

export const UserInformation: React.FC<IUserInformationProps> = ({ image, name, description }) => (
  <div className={styles.userInformation}>
    <img className={styles.userAvatar} src={image} alt={name} />
    <div className={styles.userInformationContent}>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);
