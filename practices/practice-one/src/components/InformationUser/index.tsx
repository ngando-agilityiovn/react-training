// Styles
import styles from './index.module.css';

interface IProps {
  image: string;
  title: string;
  alt: string;
  description?: string;
}

export const UserInformation: React.FC<IProps> = ({ image, title, alt, description }) => {
  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={image} alt={alt} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
