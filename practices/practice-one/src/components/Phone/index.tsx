// styles
import styles from './index.module.css';

const phone = [
  {
    id: 0,
    phone: '0987654345'
  },
  {
    id: 1,
    phone: '0987654345'
  },
  {
    id: 2,
    phone: '0987654346'
  }
];

export const Phone: React.FC = (): JSX.Element => {
  return (
    <>
      <h2>Phone</h2>
      {phone.map(({ id, phone }) => (
        <p key={id} className={styles.phone}>{phone}</p> ))}
    </>
  );
};
  