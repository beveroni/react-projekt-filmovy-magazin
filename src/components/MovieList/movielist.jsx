import React from 'react';
import { movies } from '../../movie-database.js';
import { Link } from 'react-router-dom';

export const MoviesList = () => {
  return (
    <>
      <h1>Movies List</h1>
      <div className="moviesListContainer">
        {movies.map((film) => {
          return (
            <Link key={film.id} to={`/${film.id}`}>
              {film.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
