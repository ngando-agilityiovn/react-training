// styles
import tagStyles from './index.module.css';

// type
type variant = 'purple' | 'green' | 'yellow' | 'red' | 'gray';

interface IProps {
  color?: variant;
  title?: string;
}

const Tag: React.FC<IProps> = ({ color = 'purple', title }) => {
  return <div className={`${tagStyles.tag} ${tagStyles[color]}`}>{title}</div>;
};

export default Tag;
