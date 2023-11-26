import { Table, TableContainer } from '@chakra-ui/react'
import { TableHeader } from '..'
import { TableBody } from '../TableBody'

interface ITableProps {
  tableHeader: TableHeader[]
  tableBody: TableBody[]
}

export const TableProject = ({ tableHeader, tableBody }: ITableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader tableHeader={tableHeader} />
        <TableBody tableBody={tableBody} />
      </Table>
    </TableContainer>
  )
}
