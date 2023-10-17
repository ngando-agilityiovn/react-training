// Styles
import styles from './index.module.css';

// Types
import { BUTTON_VARIANT } from '@/types';

// Components
import { Button } from '../Button';
import { ArrowDown } from '../Icons';

interface TableHeader {
  label: string;
  width?: string;
  icon?: boolean;
}

interface TableProps<T> {
  tableHeader: TableHeader[];
  tableData?: T[];
  customRender?: (data: T, width?: number) => JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table: React.FC<TableProps<any>> = ({ tableHeader, tableData, customRender }) => {
  return (
    <div className={styles.mainTable}>
      <div className={styles.tableHeader}>
        {tableHeader.map(({ label, width, icon }) => {
          return (
            <div key={label} style={{ flex: width }} className={styles.tableHeaderContent}>
              <p key={label}>{label}</p>
              {icon && (
                <div className={styles.sorting}>
                  <Button variant={BUTTON_VARIANT.ICON}>
                    <ArrowDown />
                  </Button>
                </div>
              )}
            </div>
          );
        })}
        <div style={{ width: '10%' }} className={styles.tableHeaderContent}></div>
      </div>

      <div className={styles.tableContent}>
        {tableData?.map((dataItem) => {
          return (
            <div key={dataItem.id} className={styles.tableRow}>
              {customRender?.(dataItem)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
