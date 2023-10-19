// Styles
import { combineClasses } from '@/utils';

// Utilities
import tagStyles from './index.module.css';

// enums
import { TAG_COLORS } from '@/types';

export interface ITagProps {
  variant?: TAG_COLORS;
  title?: string;
  className?: string;
}

export const Tag = ({ variant = TAG_COLORS.INFO, title }: ITagProps) => {
  return (
    <div className={combineClasses([tagStyles.tag, tagStyles[variant]])}>
      <p className={tagStyles.tagTitle}>{title}</p>
    </div>
  );
};
