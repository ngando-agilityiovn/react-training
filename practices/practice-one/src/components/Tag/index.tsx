// styles
import tagStyles from './index.module.css';

// enums
import { TAG_COLORS } from '~/types';

interface TagProps {
  color?: TAG_COLORS;
  title?: string;
}

const Tag: React.FC<TagProps> = ({ color = TAG_COLORS.PURPLE, title, ...props }) => {
  return (
    <div className={`${tagStyles.tag} ${tagStyles[color]}`} {...props}>
      {title}
    </div>
  );
};

export default Tag;
