// Utilities
import { combineClasses, uppercaseFirstLetter } from '@/utils';

// Components
import { UserInformation } from '../UserInformation';

// Styles
import styles from './index.module.css';
import { ITagProps, Tag } from '../Tag';
import { BUTTON_VARIANT, Status } from '@/types';
import { Button } from '../Button';
import { Delete, Edit } from '../Icons';

interface ICustomRenderProps {
  name: string;
  avatarUrl: string;
  description: string;
  email: string;
  phoneNumber: string;
  status: Status;
}

const colorStatusMapping = {
  [Status.CLOSED]: 'error',
  [Status.DISABLED]: 'disabled',
  [Status.ACTIVE]: 'success',
  [Status.TRIAL]: 'info',
  [Status.PENDING]: 'warning'
};

export const CustomRender: React.FC<ICustomRenderProps> = ({
  name,
  avatarUrl,
  description,
  email,
  phoneNumber,
  status
}) => (
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
      <Tag title={uppercaseFirstLetter(status)} variant={colorStatusMapping[status] as ITagProps['variant']} />
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
