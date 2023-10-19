// Styles
import styles from './index.module.css';
import { TableHeader } from '../TableHeader';
import { TableBody } from '../TableBody';

interface ITableProps<T> {
  tableHeader: TableHeader[];
  dataTable?: T[];
  renderBody: (data: T) => JSX.Element;
}

export const Table = <T,>({ tableHeader, dataTable, renderBody }: ITableProps<T>) => (
  <div className={styles.mainTable}>
    <TableHeader tableHeader={tableHeader} />
    <TableBody<T> tableData={dataTable} customRender={renderBody} />
  </div>
);
