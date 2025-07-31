import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({ text, url, ...props }) => {
  return (
    <Link href={url}>
      <button className={styles.container} {...props}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
