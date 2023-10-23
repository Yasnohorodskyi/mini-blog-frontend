import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LoaderFunction } from 'react-router';
import Banner from '@/components/banner/Banner';
import PostsList from '@/components/post-list/PostList';
import {
  BlogPostEntry,
  IBlogPostShort,
  parseContentfulBlogPostShort,
} from '@/contentful/utils/BlogPosts';

import { PageEntry, IPage, parseContentfulPage } from '@/contentful/utils/Page';

interface IHomeProps {
  posts: BlogPostEntry[];
  mainPage: PageEntry;
}

const Home: FC = () => {
  const data = useLoaderData() as IHomeProps;
  const posts = data.posts.map(
    (post) => parseContentfulBlogPostShort(post) as IBlogPostShort
  );
  const page = parseContentfulPage(data.mainPage) as IPage;
  return (
    <>
      {page.pageContent && page.pageImage && (
        <Banner
          title={page.title}
          pageContent={page.pageContent}
          pageImage={page.pageImage}
        />
      )}
      <PostsList postsSectionTitle={page.postsSectionTitle} posts={posts} />
    </>
  );
};

export default Home;

export const loader: LoaderFunction = async () => {
  try {
    const [postsResponse, pagesResponse] = await Promise.all([
      fetch('http://localhost:3002/api/posts'),
      fetch('http://localhost:3002/api/pages/main'),
    ]);

    const [postsData, pagesData] = await Promise.all([
      postsResponse.ok
        ? postsResponse.json()
        : Promise.reject('Failed to fetch posts'),
      pagesResponse.ok
        ? pagesResponse.json()
        : Promise.reject('Failed to fetch main page data'),
    ]);

    return { posts: postsData, mainPage: pagesData };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
