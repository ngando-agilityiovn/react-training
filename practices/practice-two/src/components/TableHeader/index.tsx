import { Flex, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { Info, Sorting } from '..'

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
                return <Info />

              case 'sorting':
                return <Sorting />
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
