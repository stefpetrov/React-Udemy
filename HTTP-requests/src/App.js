import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  // async function fetchMoviesHandler() {

  //   const response = await fetch('https://swapi.dev/api/films/')
  //   const data = await response.json()

  //   const tranformedMovies = data.results.map(movieData => {
  //     return {
  //       id: movieData.episode_id,
  //       title: movieData.title,
  //       openingText: movieData.opening_crawl,
  //       releaseData: movieData.release_date
  //     }
  //   })

  //   setMovies(tranformedMovies)

  // }

  function fetchMoviesHandler() {
    setIsLoading(true)

    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {

        const tranformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_date
          }
        })

        setMovies(tranformedMovies)
        setIsLoading(false)
      })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Found!</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
