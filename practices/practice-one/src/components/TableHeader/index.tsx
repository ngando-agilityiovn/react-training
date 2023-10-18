// Styles
import styles from './index.module.css';

// Types
import { BUTTON_VARIANT } from '@/types';

// Styles
import { ArrowDown } from '../Icons';
import { Button } from '../Button';
import { combineClasses } from '@/utils';

interface TableHeader {
  label: string;
  width?: string;
  icon?: boolean;
}

interface IHeaderProps {
  tableHeader: TableHeader[];
}

export const TableHeader: React.FC<IHeaderProps> = ({ tableHeader }) => (
  <div>
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
      <div className={combineClasses([styles.tableHeaderContent, styles.tableHeaderContentButton])}></div>
    </div>
  </div>
);
