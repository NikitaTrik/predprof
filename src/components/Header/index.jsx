import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.block}>
      <div className={styles.wrapper}>
        <Link className={styles.title} to="/">
          Название
        </Link>
        <nav className={styles.links}>
          <Link to="/" className={styles.link}>
            Управление компонентами
          </Link>
          <Link to="/normalData" className={styles.link}>
            Температура и влажность
          </Link>
          <span className={styles.link}>Ср. температура и влажность</span>
          <span className={styles.link}>Влажность почвы</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
