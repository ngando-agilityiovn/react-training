import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react'

// Icon components
import { Check } from '../Icons'

interface IDescriptionTagItem {
  title: string
  text: string
  data: string[]
}

const DescriptionTab = ({ title, text, data }: IDescriptionTagItem) => {
  return (
    <Tabs>
      <TabList mb="49px">
        <Tab color="textDescription" fontSize="md" fontWeight="semibold">
          Description
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box mb="40px">
            <Text
              mb="21px"
              fontSize="2xl"
              fontWeight="bold"
              color="textInactive"
            >
              {title}
            </Text>
            <Text>{text}</Text>
          </Box>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="textInactive">
              Benefits
            </Text>
            <Flex mt="21px" gap="14px" flexDirection="column">
              {data.map((title) => (
                <Flex gap="14px" alignItems="center">
                  <Check />
                  <Text key={title}>{title}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default DescriptionTab
