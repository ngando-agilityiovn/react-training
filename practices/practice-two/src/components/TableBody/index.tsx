import { Tbody, Tr } from '@chakra-ui/react'

export interface IBodyProps<T> {
  tableData?: T[]
  customRender?: (data: T, index: number) => JSX.Element
}

export const TableBody = <T,>({ tableData, customRender }: IBodyProps<T>) => {
  return (
    <Tbody>
      {tableData &&
        Boolean(tableData.length) &&
        tableData.map((dataItem, index) => (
          <Tr key={index}>{customRender?.(dataItem, index)}</Tr>
        ))}
    </Tbody>
  )
}
