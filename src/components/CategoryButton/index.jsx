import classNames from 'classnames';
import React from 'react';
import styles from './CategoryButton.module.scss';
function CategoryButton({ value, selectedCategory, setSelectedCategory }) {
  return (
    <button
      onClick={() => {
        if (selectedCategory === value) {
          setSelectedCategory('');
        } else {
          setSelectedCategory(value);
        }
      }}
      className={classNames(styles.root, value === selectedCategory && styles.active)}>
      {value}
    </button>
  );
}

export default CategoryButton;
