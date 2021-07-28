import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const fetchMoviesHandler = () => {
      setLoading(true);
      fetch("https://swapi.dev/api/films/").then((response) => 
              {return response.json()}).
              then((data) => {
                const transformed = data.results.map(movie => {
                  return {
                    id : movie.episode_id,
                    title : movie.title,
                    openingText : movie.opening_crawl,
                    releaseDate : movie.release_Date
                  }
                })
                setMovies(transformed);
                setLoading(false);
              }).catch(() => console.log('exception occuredd'));
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading &&  movies.length === 0  && <p> No movie present</p>}
        {loading && <p> loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
