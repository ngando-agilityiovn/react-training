import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { Project, ProjectStatus, TableProject } from '..'

const tableHeader = [
  {
    id: '0',
    label: '#',
    typeIcon: 'sorting',
  },
  {
    id: '1',
    label: 'project name',
    typeIcon: 'sorting',
  },
  {
    id: '2',
    label: 'pm',
    typeIcon: '',
  },
  {
    id: '3',
    label: 'status',
    typeIcon: 'info',
  },
  {
    id: '4',
    label: 'last update',
    typeIcon: 'sorting',
  },
  {
    id: '5',
    label: 'resources',
    typeIcon: '',
  },
  {
    id: '6',
    label: 'project timeline',
    typeIcon: 'info',
  },
  {
    id: '7',
    label: 'estimation',
    typeIcon: '',
  },
]

export const projects: Project[] = [
  {
    id: '0',
    name: 'HTML-CSS project',
    manager: 'John Smith',
    status: ProjectStatus.AT_RISK,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
  {
    id: '1',
    name: 'JS project',
    manager: 'John Alan',
    status: ProjectStatus.ON_HOLD,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
  {
    id: '2',
    name: 'Python project',
    manager: 'Alan Smith',
    status: ProjectStatus.POTENTIAL_RISK,
    updatedAt: 123456,
    resource: 4,
    timeline: {
      start: 123456,
      end: 123456,
    },
    estimation: 4,
  },
]

export const StatusGroup = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            All
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            29
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            Risk
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            9
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            On hold
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            4
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            Potential risk
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            9
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            On track
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            10
          </Badge>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableProject tableHeader={tableHeader} tableBody={projects} />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
