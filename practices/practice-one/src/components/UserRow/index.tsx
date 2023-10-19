// Utilities
import { combineClasses, uppercaseFirstLetter } from '@/utils';

// Components
import { Button, Tag, Delete, Edit, UserInformation } from '@/components';

// Types
import { BUTTON_VARIANT, Status, TAG_COLORS } from '@/types';

// Pages
import { User } from '@/pages/Homepage';

// Styles
import styles from './index.module.css';

const colorStatusMapping = {
  [Status.CLOSED]: TAG_COLORS.INFO,
  [Status.DISABLED]: TAG_COLORS.DISABLED,
  [Status.ACTIVE]: TAG_COLORS.SUCCESS,
  [Status.TRIAL]: TAG_COLORS.INFO,
  [Status.PENDING]: TAG_COLORS.WARNING
};

export const UserRow = ({ name, avatarUrl, description, email, phoneNumber, status }: User) => (
  <>
    <div className={combineClasses([styles.tableHeaderContent, styles.userInfo])}>
      <UserInformation name={name} image={avatarUrl} description={description} />
    </div>
    <div className={combineClasses([styles.tableHeaderContent, styles.userEmail])}>
      <p className='mobile-only text-copy'>Email address</p>
      <p>{email}</p>
    </div>
    <div className={combineClasses([styles.tableHeaderContent, styles.userPhone])}>
      <p className='mobile-only text-copy'>Phone number</p>
      <p>{phoneNumber}</p>
    </div>
    <div className={combineClasses([styles.tableHeaderContent, styles.status])}>
      <p className='mobile-only text-copy'>Status</p>
      <Tag title={uppercaseFirstLetter(status)} variant={colorStatusMapping[status] as TAG_COLORS} />
    </div>
    <div className={combineClasses([styles.tableHeaderContent, styles.tableActions])}>
      <Button variant={BUTTON_VARIANT.ICON}>
        <Edit />
      </Button>
      <Button variant={BUTTON_VARIANT.ICON}>
        <Delete />
      </Button>
    </div>
  </>
);
