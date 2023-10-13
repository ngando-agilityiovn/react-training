// Styles
import { TAG_COLORS } from '~/types';
import { Tag } from '..';
import styles from './index.module.css';
import { Delete, Edit } from '~/assets/icons';

export const Table: React.FC = (): JSX.Element => {
  return (
    <div className={styles.divTable}>
      <div className={`${styles.headerRow} ${styles.active}`}>
        <div className={styles.divCell}>
          <b>User</b>
        </div>
        <div className={styles.divCell}>
          <b>Email adress</b>
        </div>
        <div className={styles.divCell}>
          <b>Phone number</b>
        </div>
        <div className={styles.divCell}>
          <b>Status</b>
        </div>
        <div className={styles.divCell}>
          <b></b>
        </div>
      </div>
      <div className={styles.headerRow}>
        <div className={styles.divCell}>
          <div className={styles.wrap}>
            <img
              className={styles.img}
              src='https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=4f14512c-7ba6-449e-bbcf-73ebc7a5744f&_gl=1*16umgxq*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5Njk5NDY5OS4xLjEuMTY5Njk5NDc5OC41My4wLjA'
              alt='Ảnh'
            />
            <div>
              <div className={styles.title}>John Doe</div>
              <div className={styles.description}>A brief description of John Doe.</div>
            </div>
          </div>
        </div>
        <div className={styles.divCell}>email@gmail.com</div>
        <div className={styles.divCell}>2012617826</div>
        <div className={styles.divCell}>
          <p>
            <Tag color={TAG_COLORS.YELLOW} title='status' />
          </p>
        </div>
        <div className={styles.divCell}>
          <Edit />
          <Delete />
        </div>
      </div>
    </div>
  );
};
