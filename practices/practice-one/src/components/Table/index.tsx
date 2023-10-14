// Styles
import styles from './index.module.css';

// Types
import { TAG_COLORS } from '@/types';

// Components
import { Delete, Edit, Tag } from '..';

export const Table: React.FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>User</h2>
      <div className={styles.table}>
        <div className={`${styles.headerRow} ${styles.active}`}>
          <div className={styles.cell}>
            <b className={styles.title}>User</b>
          </div>
          <div className={styles.cell}>
            <b className={styles.title}>Email address</b>
          </div>
          <div className={styles.cell}>
            <b className={styles.title}>Phone number</b>
          </div>
          <div className={styles.cell}>
            <b className={styles.title}>Status</b>
          </div>
          <div className={styles.cell}>
            <b className={styles.title}></b>
          </div>
        </div>
        <div className={styles.headerRow}>
          <div className={styles.cell}>
            <div className={styles.wrap}>
              <img
                className={styles.image}
                src='https://firebasestorage.googleapis.com/v0/b/brand-1b5b2.appspot.com/o/avatar.png?alt=media&token=48dc1426-5e9c-4cfe-9d95-891f2f2b56b2&_gl=1*1mfnhfw*_ga*ODg4OTAzNjM4LjE2OTY5OTQ2OTk.*_ga_CW55HF8NVT*MTY5NzE2NTQ3Ny40LjEuMTY5NzE2NTQ5My40NC4wLjA.'
                alt='Avatar'
              />
              <div>
                <div className={styles.name}>John Doe</div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          </div>
          <div className={styles.cell}>
            <div className={styles.titleCell}>Email address:</div>
            <div>email@gmail.com</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.titleCell}>Phone number:</div>
            <div>2012617826</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.titleCell}>Status:</div>
            <div>
              <Tag color={TAG_COLORS.LIGHT} title='Status' />
            </div>
          </div>
          <div className={styles.cell}>
            <div className={styles.titleCell}></div>
            <div className={styles.button}>
              <div className={styles.icon}>
                <Edit />
              </div>
              <div className={styles.icon}>
                <Delete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
