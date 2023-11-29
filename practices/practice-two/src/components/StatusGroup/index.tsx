import { useEffect, useState } from 'react'
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

const StatusGroup = () => {
  const [projects, setProjects] = useState([])

  const getData = async () => {
    const responce = await fetch(`http://localhost:3000/projects`)

    setProjects(await responce.json())
  }

  useEffect(() => {
    getData()
  }, [])

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
            29
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
            9
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
            4
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
            9
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

export default StatusGroup
