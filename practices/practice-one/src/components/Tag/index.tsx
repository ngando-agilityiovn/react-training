// Styles
import { combineClasses } from '@/utils';

// Utilities
import tagStyles from './index.module.css';

// enums
import { TAG_COLORS } from '@/types';

interface ITagProps {
  color?: TAG_COLORS;
  title?: string;
}

export const Tag: React.FC<ITagProps> = ({ color = TAG_COLORS.INFO, title }) => (
  <div className={combineClasses([tagStyles.tag, tagStyles[color]])}>{title}</div>
);
