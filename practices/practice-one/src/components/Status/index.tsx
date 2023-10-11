import { TAG_COLORS } from '~/types';
import { Tag } from '..';

// Styles
import styles from './index.module.css';

// Icons
import { Edit } from '~/assets/icons';
import { Delete } from '~/assets/icons';

const tag = [
  {
    id: 0,
    title: 'status',
    color: TAG_COLORS.PURPLE
  },
  {
    id: 1,
    title: 'status',
    color: TAG_COLORS.YELLOW
  },
  {
    id: 2,
    title: 'status',
    color: TAG_COLORS.RED
  }
];

const editButton = [
  {
    id: 0,
    icon: <Edit />
  },
  {
    id: 1,
    icon: <Edit />
  },
  {
    id: 2,
    icon: <Edit />
  }
];

const deleteButton = [
  {
    id: 0,
    icon: <Delete />
  },
  {
    id: 1,
    icon: <Delete />
  },
  {
    id: 2,
    icon: <Delete />
  }
];

export const Status: React.FC = () => {
  return (
    <div>
      <h2>Status</h2>
      <div className={styles.main}>
        <p>
          {tag.map(({ id, title, color }) => (
            <Tag key={id} color={color} title={title} />
          ))}
        </p>

        <p>
          {editButton.map(({ id, icon }) => (
            <p className={styles.spaceEdit} key={id}>
              {icon}
            </p>
          ))}
        </p>

        <p>
          {deleteButton.map(({ id, icon }) => (
            <p className={styles.spaceEdit} key={id}>
              {icon}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};
