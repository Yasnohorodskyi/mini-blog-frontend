import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LoaderFunction } from 'react-router';
import RichText from '@/components/rich-text/RichText';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  BlogPostEntry,
  IBlogPost,
  parseContentfulBlogPost,
} from '@/contentful/utils/BlogPosts';

import styles from './Post.module.scss';

const Post: FC = () => {
  const data = useLoaderData() as BlogPostEntry;

  const post = parseContentfulBlogPost(data) as IBlogPost;

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>{post?.title}</h1>
          </div>
          {post?.postImage && (
            <div className={styles.imageContainer}>
              <LazyLoadImage
                src={post?.postImage.src}
                className={styles.image}
              />
            </div>
          )}
        </div>
        <div className={styles.description}>
          <RichText document={post?.content} />
        </div>
      </div>
    </section>
  );
};

export default Post;

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const response = await fetch(`http://localhost:3002/api/posts/${slug}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
};
