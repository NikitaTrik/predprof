import React from 'react';

import styles from './MainTitle.module.scss';

function MainTitle({ text }) {
  return <h2 className={styles.title}>{text}</h2>;
}

export default MainTitle;
