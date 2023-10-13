// Styles
import tagStyles from './index.module.css';

// enums
import { TAG_COLORS } from '@/types';

interface IProps {
  color?: TAG_COLORS;
  title?: string;
  className?: string;
}

export const Tag: React.FC<IProps> = ({ color = TAG_COLORS.PRIMARY, title }) => {
  return <div className={`${tagStyles.tag} ${tagStyles[color]}`}>{title}</div>;
};
