import { Flex, Text, Th, Thead, Tr } from '@chakra-ui/react'

// Components
import { InfoIcon, SortingIcon } from '../../Icons'

export interface TableHeader {
  id: string
  label: string
  typeIcon?: string
}

export interface IHeaderProps {
  tableHeader: TableHeader[]
}

export const TableHeader = ({ tableHeader }: IHeaderProps) => {
  return (
    <Thead>
      <Tr>
        {tableHeader?.map(({ label, typeIcon, id }) => {
          const renderIcon = () => {
            if (typeIcon === 'info') {
              return <InfoIcon />
            } else if (typeIcon === 'sorting') {
              return <SortingIcon />
            }

            return null
          }

          return (
            <Th key={id}>
              <Flex>
                <Text
                  color="tertiary"
                  fontWeight="medium"
                  textTransform="uppercase"
                >
                  {label}
                </Text>
                {renderIcon()}
              </Flex>
            </Th>
          )
        })}
      </Tr>
    </Thead>
  )
}
