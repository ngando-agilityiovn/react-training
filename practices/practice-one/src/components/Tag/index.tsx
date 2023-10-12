// Styles
import tagStyles from './index.module.css';

// Types
import { TAG_COLORS } from '@/types/index';

interface IProps {
  color?: TAG_COLORS;
  title?: string;
}

export const Tag: React.FC<IProps> = ({ color = TAG_COLORS.PURPLE, title }) => {
  return <div className={`${tagStyles.tag} ${tagStyles[color]}`}>{title}</div>;
};
