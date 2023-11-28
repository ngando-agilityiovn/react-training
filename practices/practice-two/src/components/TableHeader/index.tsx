import { Flex, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { InfoIcon, SortingIcon } from '..'

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
            switch (typeIcon) {
              case 'info':
                return <InfoIcon />

              case 'sorting':
                return <SortingIcon />
            }
          }

          return (
            <Th key={id}>
              <Flex>
                <Text textTransform="uppercase">{label}</Text>
                {renderIcon()}
              </Flex>
            </Th>
          )
        })}
      </Tr>
    </Thead>
  )
}
