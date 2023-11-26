import { Text, Th, Thead, Tr } from '@chakra-ui/react'

export interface TableHeader {
  label: string
  icon?: string
}

export interface IHeaderProps {
  tableHeader: TableHeader[]
}

export const TableHeader = ({ tableHeader }: IHeaderProps) => {
  return (
    <Thead>
      <Tr>
        {tableHeader?.map(({ label }) => {
          return (
            <Th>
              <Text textTransform="uppercase">{label}</Text>
            </Th>
          )
        })}
      </Tr>
    </Thead>
  )
}
