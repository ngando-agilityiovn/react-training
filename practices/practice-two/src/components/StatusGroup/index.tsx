import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { TableBody, TableProject } from '..'

const tableHeader = [
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
  {
    label: 'project name',
  },
]

enum Status {
  OnTrack = "ON_TRACK",
  OnHold = "ON_HOLD",
  AtRisk = "AT_RISK",
  PotentialRisk = "POTENTIAL_RISK",
}

export type Timeline = {
  start: string
  end: string
}

interface Project {
  id: string
  projectName: string
  projectManager: string
  status: Status
  update: number
  resource: string
  timeline: Timeline
  estimation: string
}

const tableBody: Project[] = [
  {
    id: '1',
    projectName: "HEllo",
    projectManager: 'ndd',
    status: Status.AtRisk,
    update: '15 Mar 2021, 12:47 PM',
    resource: 'Frontend',
    timeline: Timeline.
    estimation: '10.4k'

  }
]

export const StatusGroup = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Text
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            All
          </Text>
          <Badge
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            29
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            Risk
          </Text>
          <Badge
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            9
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            On hold
          </Text>
          <Badge
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            4
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            Potential risk
          </Text>
          <Badge
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="29px"
          >
            9
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="6px"
            lineHeight="20px"
            letterSpacing="0.28px"
          >
            On track
          </Text>
          <Badge
            _selected={{ color: '#5E5ADB', fontWeight: 'bold' }}
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
          <TableProject tableHeader={tableHeader} tableBody={tableB} />
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
