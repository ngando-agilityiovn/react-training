import styles from './index.module.css';

const email = [
  {
    id: 0,
    email: 'example@gmail.com'
  },
  {
    id: 1,
    email: 'example@gmail.com'
  },
  {
    id: 2,
    email: 'example@gmail.com'
  }
];

export const EmailInformation: React.FC = (): JSX.Element => {
  return (
    <>
      <h2>Email</h2>
      {email.map(({ id, email }) => (
        <p key={id} className={styles.email}>
          {email}
        </p>
      ))}
    </>
  );
};
