// Styles
import { TAG_COLORS } from '~/types';
import { Tag } from '..';
import styles from './index.module.css';
import { Delete, Edit } from '~/assets/icons';

export const Table: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className={styles.divTable}>
        <div className={`${styles.headerRow} ${styles.active}`}>
          <div className={styles.divCell}>
            <div className={styles.area}>
              <b className={styles.title}>User</b>
            </div>
            <div className={styles.wrap}>
              <img
                className={styles.img}
                src='https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=48dc1426-5e9c-4cfe-9d95-891f2f2b56b2&_gl=1*1mfnhfw*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5NzE2NTQ3Ny40LjEuMTY5NzE2NTQ5My40NC4wLjA.'
                alt='Avatar'
              />
              <div>
                <div className={styles.name}>John Doe</div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.divCell}>
            <div className={styles.area}>
              <b className={styles.title}>Email address</b>
            </div>
            <div className={styles.divCell}>email@gmail.com</div>
          </div>
          <div className={styles.divCell}>
            <div className={styles.area}>
              <b className={styles.title}>Phone number</b>
            </div>
            <div className={styles.divCell}>2012617826</div>
          </div>
          <div className={styles.divCell}>
            <div className={styles.area}>
              <b className={styles.title}>Status</b>
            </div>
            <div className={styles.divCell}>
              <Tag color={TAG_COLORS.YELLOW} title='Status' />
            </div>
          </div>
          <div className={styles.divCell}>
            <b className={styles.title}></b>
            <div className={`${styles.divCell} ${styles.button}`}>
              <Edit />
              <Delete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
