import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

// Icon components
import { Check } from '../../Icons'

interface IBenefitItem {
  title: string
}

interface IDescriptionTagItem {
  descriptionTitle: string
  descriptionText: string
  benefitData: IBenefitItem[]
}

const DescriptionTab = ({
  descriptionTitle,
  descriptionText,
  benefitData,
}: IDescriptionTagItem) => {
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
              {descriptionTitle}
            </Text>
            <Text>{descriptionText}</Text>
          </Box>
          <Box>
            <Text fontSize="2xl" fontWeight="bold" color="textInactive">
              Benefits
            </Text>
            <Flex mt="21px" gap="14px">
              <Check />
              {benefitData.map(({ title }) => (
                <Text key={title}>{title}</Text>
              ))}
            </Flex>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default DescriptionTab
