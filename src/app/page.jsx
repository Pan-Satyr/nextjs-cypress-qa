import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container} data-testid="home-container">
      <div className={styles.item} data-testid="home-text-block">
        <h1 className={styles.title} data-testid="home-title">
          Better design for your digital products.
        </h1>
        <p className={styles.desc} data-testid="home-description">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button
          url="/portfolio"
          text="See Our Works"
          data-testid="home-cta-button"
        />
      </div>
      <div className={styles.item} data-testid="home-image-block">
        <Image
          src="/hero.png"
          alt="Hero"
          width={1000}
          height={1000}
          className={styles.img}
          data-testid="home-hero-image"
        />
      </div>
    </div>
  );
}
