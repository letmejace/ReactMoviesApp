import React, { useEffect, useState } from "react";
import Movie from './components/Movie';

// Moviedb API 변수에 담기
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=262b76947e7259fa05d3bd23195fd016&page=1";
const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&api_key=262b76947e7259fa05d3bd23195fd016&query=";

function App() {

  // movies Array 생성
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
  }, []);

  return (
      <>
        <header>
              <input 
                className="search"
                type="text" 
                placeholder="Search..." 
              />
        </header>
        <div className="movie-container">
            {movies.length > 0 &&
              movies.map((movie) => <Movie key={movie.id} {...movie} />)} 
        </div>
      </>
  );
}

export default App;
