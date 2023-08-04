import React from 'react';

export const Movies = () => {
  return (
    <main>
      <div className="movies">
        <h1>Movies</h1>
        <div className="movies-container">
          <div className="movie">
            <img
              src="https://github.com/Czechitas-podklady-WEB/projekt-filmovy-magazin/raw/main/html-vzor/images/pulp-fiction.jpg"
              alt="Pulp Fiction"
            />
            <h2>Pulp Fiction</h2>
            <p>
              After stealing a mysterious orb in the far reaches of outer space,
              Peter Quill from Earth is now the main target of a manhunt led by
              the villain known as Ronan the Accuser. To help fight Ronan and
              his team and save the galaxy from his power, Quill creates a team
              of space heroes known as the "Guardians of the Galaxy" to save the
              galaxy.
            </p>
          </div>
        </div>
      </div>
    </main>
    // );
    // return (
    //   <>
    //     <h1>Movies</h1>
    //     <div
    //       style={{
    //         display: 'flex',
    //       }}
    //     >
    //       <MoviesList />
    //       <Outlet />
    //     </div>
    //   </>
  );
};
