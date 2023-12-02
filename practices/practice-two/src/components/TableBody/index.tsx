import { Tbody, Tr } from '@chakra-ui/react'

export interface IBodyProps<T> {
  tableData: T[]
  customRender?: (data: T, id: number) => JSX.Element
}

export const TableBody = <T,>({ tableData, customRender }: IBodyProps<T>) => {
  return (
    <Tbody>
      {Boolean(tableData?.length) &&
        tableData.map((dataItem, id) => (
          <Tr key={id}>{customRender?.(dataItem, id)}</Tr>
        ))}
    </Tbody>
  )
}
