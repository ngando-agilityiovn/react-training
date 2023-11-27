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
    label: '#',
  },
  {
    label: 'project name',
  },
  {
    label: 'pm',
  },
  {
    label: 'status',
  },
  {
    label: 'last update',
  },
  {
    label: 'resources',
  },
  {
    label: 'project timeline',
  },
  {
    label: 'estimation',
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
