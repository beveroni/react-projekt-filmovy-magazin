import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { ErrorPage } from './components/ErrorPage/errorpage.jsx';
import { HomePage } from './pages/HomePage/home.jsx';
import { Articles } from './pages/ArticlesPage/articles.jsx';
import { Reviews } from './pages/ReviewsPage/reviews.jsx';
import './style.css';
import { Movies } from './pages/MoviesPage/movies.jsx';
import { Menu } from './components/Menu/menu.jsx';
// import { MoviesDetail } from './components/MovieDetail/moviedetail.jsx';

const App = () => {
  return (
    <div className="container">
      <h1>Filmový magazín</h1>
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/homepage',
        element: <HomePage />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/movies',
        element: <Movies />,
        // children: [
        //   {
        //     path: ':id',
        //     element: <MoviesDetail />,
        //   },
        // ],
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
