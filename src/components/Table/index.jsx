import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Table.module.scss';

function Table({ selectedCategory }) {
  const data = useSelector((state) => state.sensorsData.temperature);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span>ID датчика</span>
        <span>Температура</span>
        <span>Влажность</span>
      </div>
      <div className={styles.content}>
        {data.map((item, index) => {
          if (!selectedCategory || String(item.id) === selectedCategory) {
            console.log('Selected', selectedCategory);
            return (
              <div key={index} className={styles.row}>
                <div className={styles.rowId}>{item.id}</div>
                <div className={styles.value}>{item.temperature}</div>
                <div className={styles.value}>{item.humidity}</div>
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
