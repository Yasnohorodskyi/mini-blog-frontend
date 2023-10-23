import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import HomePage, { loader as homePageLoader } from './pages/home/Home';
import PostPage, { loader as postLoader } from './pages/post/Post';
import RootLayout from './layouts/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      { path: ':slug', element: <PostPage />, loader: postLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
