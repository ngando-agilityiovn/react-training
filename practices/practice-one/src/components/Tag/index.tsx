// Styles
import { combineClasses } from '@/utils';

// Utilities
import tagStyles from './index.module.css';

// enums
import { TAG_COLORS } from '@/types';

interface IProps {
  color?: TAG_COLORS;
  title?: string;
}

export const Tag: React.FC<IProps> = ({ color = TAG_COLORS.INFO, title }) => {
  return <div className={combineClasses([tagStyles.tag, tagStyles[color]])}>{title}</div>;
};
