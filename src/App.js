import React, { useEffect, useState } from "react";
import Movie from './components/Movie';

// Moviedb API 변수에 담기
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=262b76947e7259fa05d3bd23195fd016&page=1";
const SEARCH_API =  "https://api.themoviedb.org/3/search/movie?&api_key=262b76947e7259fa05d3bd23195fd016&query=";

function App() {

  // movies Array 생성
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  // 영화정보 API호출
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    // 검색 API호출
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      
      setSearchTerm("");
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
      <>
        <header>
          <div className="logo">
              <h1 className="home">Movie<span>View</span></h1>
          </div>
          {/* 검색창 */}
          <form onSubmit={handleOnSubmit}>
            <div className="msearch">
              <input 
                className="search"
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleOnChange}
              />
            </div>
          </form>
        </header>
        {/* 영화정보 */}
        <div className="movie-container">
            {movies.length > 0 &&
              movies.map((movie) => <Movie key={movie.id} {...movie} />)} 
        </div>
      </>
  );
}

export default App;
