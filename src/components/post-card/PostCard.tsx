import { FC } from 'react';
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IBlogPostShort } from '@/contentful/utils/BlogPosts';

import styles from './PostCard.module.scss';

interface IPostCardProps {
  post: IBlogPostShort;
}

const PostCard: FC<IPostCardProps> = ({ post }) => (
  <div className={styles.card}>
    {post.postImage && (
      <LazyLoadImage src={post.postImage.src} className={styles.image} />
    )}
    <div className={styles.content}>
      <h3 className={styles.title}>{post.title}</h3>
      <div className={styles.linkWrap}>
        <Link to={post.slug} className={styles.link}>
          <span className={styles.button}>Read more</span>
        </Link>
      </div>
    </div>
  </div>
);

export default PostCard;
