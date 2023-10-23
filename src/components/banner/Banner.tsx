import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import RichText from '@/components/rich-text/RichText';

import { IPageBanner } from '@/contentful/utils/Page';

import styles from './Banner.module.scss';

const Banner: FC<IPageBanner> = ({ title, pageContent, pageImage }) => (
  <section className={styles.banner}>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description}>
          <RichText document={pageContent} />
        </div>
      </div>
      {pageImage && (
        <div className={styles.imageContainer}>
          <LazyLoadImage src={pageImage.src} className={styles.image} />
        </div>
      )}
    </div>
  </section>
);

export default Banner;
