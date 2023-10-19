// Styles
import homeStyles from './index.module.css';

// Components
import { Button, Container, Filter, Heading, Table, UserRow } from '@/components';

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

const users: User[] = [
  {
    id: 0,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: Status.ACTIVE
  },
  {
    id: 1,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: Status.CLOSED
  },
  {
    id: 2,
    avatarUrl: 'https://picsum.photos/40/40',
    name: 'Join Steam',
    description: 'Developer',
    email: 'john@steam.com',
    phoneNumber: '123456789',
    status: Status.PENDING
  }
];

const tableHeader = [
  {
    label: 'User',
    width: '30%',
    icon: true
  },
  {
    label: 'Email address',
    width: '30%',
    icon: false
  },
  {
    label: 'Phone number',
    width: '15%',
    icon: false
  },
  {
    label: 'Status',
    width: '15%',
    icon: false
  }
];

export const Homepage: React.FC = (): JSX.Element => (
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
      {users.length ? (
        <Table<User>
          tableHeader={tableHeader}
          dataTable={users}
          renderBody={(dataTable) => <UserRow {...dataTable} />}
        />
      ) : (
        <div>No data found</div>
      )}
    </Container>
  </main>
);
