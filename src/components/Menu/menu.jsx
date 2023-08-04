import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
  return (
    <nav>
      <Link to="/homepage">Home</Link>
      <span> | </span>
      <Link to="/articles">Articles</Link>
      <span> | </span>
      <Link to="/reviews">Reviews</Link>
      <span> | </span>
      <Link to="/movies">Movies</Link>
      <span> | </span>
    </nav>
  );
};
