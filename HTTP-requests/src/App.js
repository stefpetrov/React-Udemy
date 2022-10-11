import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/')
      
      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const data = await response.json()

      const tranformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date
        }
      })

      setMovies(tranformedMovies)

    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)

  }

  let content = <p>No Movies Found!</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;


  // fetch data with promise/then

  // function fetchMoviesHandler() {
  //   setIsLoading(true)

  //   fetch('https://swapi.dev/api/films/')
  //     .then(response => response.json())
  //     .then(data => {

  //       const tranformedMovies = data.results.map(movieData => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseData: movieData.release_date
  //         }
  //       })

  //       setMovies(tranformedMovies)
  //       setIsLoading(false)
  //     })
  // }
