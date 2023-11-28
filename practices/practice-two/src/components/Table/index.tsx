import { Table, TableContainer } from '@chakra-ui/react'
import { TableHeader } from '..'
import { Project, TableBody } from '../TableBody'

interface ITableProps {
  tableHeader: TableHeader[]
  tableBody: Project[]
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
