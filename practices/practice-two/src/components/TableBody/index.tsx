import { Tbody, Tr } from '@chakra-ui/react'

export interface IBodyProps<T> {
  tableData: T[]
  customRender?: (data: T) => JSX.Element
}

export const TableBody = <T,>({ tableData, customRender }: IBodyProps<T>) => {
  return (
    <Tbody>
      {Boolean(tableData?.length) &&
        tableData.map((dataItem, index) => (
          <Tr key={index}>{customRender?.(dataItem)}</Tr>
        ))}
    </Tbody>
  )
}
