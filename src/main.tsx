import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './pages/App'
import About from './pages/About'
import Tutorial from './pages/Tutorial'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound';
import Video from './pages/Video';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/video/:videoId",
    element: <Video />,

  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },
  {
    path: "/blog",
    element: <Blog />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
