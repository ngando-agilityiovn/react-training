import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

// Components
import { TableProject } from '..'

// Constants
import { tableHeader } from '@/constants'
import { projects } from '@/mock-data'
import { Project } from '@/types'
import ProjectRow from '../ProjectRow'

interface IStatusGroupProps {
  allQuanity?: number
  riskQuanity?: number
  holdQuanity?: number
  potentialQuanity?: number
  trackQuanity?: number
}

const StatusGroup = ({
  allQuanity = 0,
  riskQuanity = 0,
  holdQuanity = 0,
  potentialQuanity = 0,
  trackQuanity = 0,
}: IStatusGroupProps) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="1.5"
            lineHeight="5"
            letterSpacing="wider"
          >
            All
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="1.8rem"
          >
            {allQuanity}
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="1.5"
            lineHeight="5"
            letterSpacing="wider"
          >
            Risk
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="1.8rem"
          >
            {riskQuanity}
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="1.5"
            lineHeight="5"
            letterSpacing="wider"
          >
            On hold
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="1.8rem"
          >
            {holdQuanity}
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="1.5"
            lineHeight="5"
            letterSpacing="wider"
          >
            Potential risk
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="1.8rem"
          >
            {potentialQuanity}
          </Badge>
        </Tab>
        <Tab>
          <Text
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            fontWeight="medium"
            mr="1.5"
            lineHeight="5"
            letterSpacing="wider"
          >
            On track
          </Text>
          <Badge
            _selected={{ color: 'primary', fontWeight: 'bold' }}
            variant="primary"
            color="b"
            h="1.8rem"
          >
            {trackQuanity}
          </Badge>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableProject<Project>
            tableHeader={tableHeader}
            dataTable={projects}
            renderBody={(dataTable) => <ProjectRow {...dataTable} />}
          />
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

export default StatusGroup
