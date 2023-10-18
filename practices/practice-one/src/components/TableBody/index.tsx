// Styles
import styles from './index.module.css';

interface ITableBodyProps<T> {
  tableData?: T[];
  customRender?: (data: T, width?: number) => JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableBody: React.FC<ITableBodyProps<any>> = ({ tableData, customRender }) => (
  <div className={styles.tableContent}>
    {tableData?.map((dataItem) => {
      return (
        <div key={dataItem.id} className={styles.tableRow}>
          {customRender?.(dataItem)}
        </div>
      );
    })}
  </div>
);
