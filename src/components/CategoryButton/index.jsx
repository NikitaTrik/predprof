import classNames from 'classnames';
import React from 'react';
import styles from './CategoryButton.module.scss';
function CategoryButton({ value, selectedCategory, setSelectedCategory, type }) {
  console.log(selectedCategory);
  return (
    <button
      onClick={() => {
        if (selectedCategory.includes(value)) {
          let arr = selectedCategory;
          arr.splice(selectedCategory.indexOf(value), 1);
          setSelectedCategory([...arr]);
        } else {
          setSelectedCategory([...selectedCategory, value]);
        }
      }}
      className={classNames(
        styles.root,
        type && styles.small,
        selectedCategory.includes(value) && styles.active,
      )}>
      {value}
    </button>
  );
}

export default CategoryButton;
