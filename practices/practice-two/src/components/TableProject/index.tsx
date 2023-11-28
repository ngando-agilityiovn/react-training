import { Table, TableContainer } from '@chakra-ui/react'

// Components
import { TableHeader } from '../TableHeader'
import { Project, TableBody } from '../TableBody'

interface ITableProps {
  tableHeader: TableHeader[]
  tableBody: Project[]
}

const TableProject = ({ tableHeader, tableBody }: ITableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader tableHeader={tableHeader} />
        <TableBody tableBody={tableBody} />
      </Table>
    </TableContainer>
  )
}

export default TableProject
