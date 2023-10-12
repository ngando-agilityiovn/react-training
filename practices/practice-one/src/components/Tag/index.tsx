// styles
import tagStyles from './index.module.css';

// type
import { TAG_COLORS } from '~/types';

interface IProps {
  color?: TAG_COLORS;
  title?: string;
}

export const Tag: React.FC<IProps> = ({ color = TAG_COLORS.PRIMARY, title }) => {
  return <div className={`${tagStyles.tag} ${tagStyles[color]}`}>{title}</div>;
};
