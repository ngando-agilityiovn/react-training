// styles
import headerStyles from './index.module.css';

const headerMenu = [
  {
    id: 0,
    title: 'User'
  },
  {
    id: 1,
    title: 'Email address'
  },
  {
    id: 2,
    title: 'Phone number'
  },
  {
    id: 3,
    title: 'Status'
  }
];

const Header: React.FC = (): JSX.Element => {
  return (
    <div className={headerStyles.header}>
      {headerMenu.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
};

export default Header;
