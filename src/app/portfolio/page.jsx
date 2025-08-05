import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container} data-testid="portfolio-container">
      <h1 className={styles.selectTitle} data-testid="portfolio-heading">
        Choose a gallery
      </h1>
      <div className={styles.items}>
        <Link
          href="/portfolio/illustrations"
          className={styles.item}
          data-testid="portfolio-link-illustrations"
        >
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link
          href="/portfolio/websites"
          className={styles.item}
          data-testid="portfolio-link-websites"
        >
          <span className={styles.title}>Websites</span>
        </Link>
        <Link
          href="/portfolio/application"
          className={styles.item}
          data-testid="portfolio-link-application"
        >
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
