// Styles
import homeStyles from './index.module.css';

// Utilities
import { combineClasses, uppercaseFirstLetter } from '@/utils';

// Components
import { Button, Container, Delete, Edit, Filter, Heading, ITagProps, Table, Tag, UserInformation } from '@/components';

// Types
import { BUTTON_VARIANT, Status } from '@/types';

export interface User {
  id: number;
  avatarUrl: string;
  name: string;
  description: string;
  email: string;
  phoneNumber: string;
  status: Status;
}

const users = [
  {
    id: 0,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: 'pending'
  },
  {
    id: 1,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: 'trial'
  },
  {
    id: 2,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: 'active'
  }
];

const tableHeader = [
  {
    label: 'User',
    width: '30%'
  },
  {
    label: 'Email address',
    width: '30%'
  },
  {
    label: 'Phone number',
    width: '15%'
  },
  {
    label: 'Status',
    width: '15%'
  }
];

const colorStatusMapping = {
  [Status.CLOSED]: 'error',
  [Status.DISABLED]: 'disabled',
  [Status.ACTIVE]: 'success',
  [Status.TRIAL]: 'info',
  [Status.PENDING]: 'warning'
};

export const Homepage: React.FC = (): JSX.Element => {
  return (
    <main className={homeStyles.homePage}>
      <Container>
        <Heading title='Users' className={homeStyles.heading} />
        <div className={homeStyles.mobileAction}>
          <p className={homeStyles.copyText}> 14 of 64 results</p>
          <Button variant={BUTTON_VARIANT.ICON}>
            <Filter />
          </Button>
        </div>
      </Container>
      <Container className={homeStyles.tableContainer}>
        <Table
          tableHeader={tableHeader}
          tableData={users}
          customRender={({ name, avatarUrl, description, email, phoneNumber, status }: User) => {
            return (
              <>
                <div
                  style={{ flex: '30%' }}
                  className={combineClasses([homeStyles.tableHeaderContent, homeStyles.userInfo])}
                >
                  <UserInformation name={name} image={avatarUrl} description={description} />
                </div>
                <div style={{ flex: '30%' }} className={homeStyles.tableHeaderContent}>
                  <p className='mobile-only text-copy'>Email address</p>
                  <p>{email}</p>
                </div>
                <div style={{ flex: '15%' }} className={homeStyles.tableHeaderContent}>
                  <p className='mobile-only text-copy'>Phone number</p>
                  <p>{phoneNumber}</p>
                </div>
                <div style={{ flex: '15%' }} className={homeStyles.tableHeaderContent}>
                  <p className='mobile-only text-copy'>Status</p>
                  <Tag
                    title={uppercaseFirstLetter(status)}
                    variant={colorStatusMapping[status] as ITagProps['variant']}
                  />
                </div>
                <div className={combineClasses([homeStyles.tableHeaderContent, homeStyles.tableActions])}>
                  <Button variant={BUTTON_VARIANT.ICON}>
                    <Edit />
                  </Button>
                  <Button variant={BUTTON_VARIANT.ICON}>
                    <Delete />
                  </Button>
                </div>
              </>
            );
          }}
        />
      </Container>
    </main>
  );
};
