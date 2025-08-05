import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container} data-testid="footer">
      <div data-testid="footer-text">©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social} data-testid="footer-social">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Lama Dev Facebook Account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Lama Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Lama Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Lama Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
