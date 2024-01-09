import { Flex, Text } from '@chakra-ui/react'
import { Check } from '../Icons'

interface IBenefitItem {
  title: string
}

interface IBenefitList {
  benefitData: IBenefitItem[]
}

const BenefitList = ({ benefitData }: IBenefitList) => {
  return (
    <Flex>
      <Check />
      {benefitData.map(({ title }) => (
        <Text key={title}>{title}</Text>
      ))}
    </Flex>
  )
}

export default BenefitList
