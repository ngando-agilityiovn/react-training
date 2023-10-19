// Styles
import styles from './index.module.css';

interface ITableBodyProps<T> {
  tableData?: T[];
  customRender?: (data: T) => JSX.Element;
}

export const TableBody = <T,>({ tableData, customRender }: ITableBodyProps<T>) => (
  <div className={styles.tableContent}>
    {tableData?.length &&
      tableData.map((dataItem, index) => (
        <div key={`table-${index}`} className={styles.tableRow}>
          {customRender?.(dataItem)}
        </div>
      ))}
  </div>
);
