import { FC } from 'react';
import PostCard from '@/components/post-card/PostCard';
import { IBlogPostShort } from '@/contentful/utils/BlogPosts';
import styles from './PostList.module.scss';
interface IPostListProps {
  posts: IBlogPostShort[];
  postsSectionTitle: string;
}

const PostList: FC<IPostListProps> = ({ postsSectionTitle, posts }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{postsSectionTitle}</h2>
      <div className={styles.postsListContainer}>
        {posts.map((post) => (
          <PostCard post={post as IBlogPostShort} key={post.title} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
