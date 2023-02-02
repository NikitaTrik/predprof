import React from 'react';

import styles from './Table.module.scss';

function Table({ selectedCategory, columns, data }) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {columns.map((column, index) => (
          <span key={index}>{column}</span>
        ))}
      </div>
      <div className={styles.content}>
        {data.map((item, index) => {
          if (!selectedCategory || String(item.id) === selectedCategory) {
            return (
              <div key={index} className={styles.row}>
                {Object.keys(item).map((key, idx) =>
                  key !== 'order' && key !== 'count' ? (
                    <div key={item.count[idx]} className={styles.rowId}>
                      {item[key]}
                    </div>
                  ) : (
                    ''
                  ),
                )}
              </div>
            );
          } else {
            return '';
          }
        })}
      </div>
    </div>
  );
}

export default Table;
