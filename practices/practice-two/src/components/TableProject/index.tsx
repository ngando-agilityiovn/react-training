import { Table, TableContainer } from '@chakra-ui/react'

// Components
import { TableHeader } from '../TableHeader'
import { TableBody } from '../TableBody'

interface ITableProps<T> {
  tableHeader: TableHeader[]
  dataTable?: T[]
  renderBody: (data: T, index: number) => JSX.Element
}

export const TableProject = <T,>({
  tableHeader,
  dataTable,
  renderBody,
}: ITableProps<T>) => {
  return dataTable ? (
    <TableContainer>
      <Table>
        <TableHeader tableHeader={tableHeader} />
        <TableBody<T> tableData={dataTable} customRender={renderBody} />
      </Table>
    </TableContainer>
  ) : null
}

export default TableProject
