import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import MovieContainer from './MovieContainer';
import MovieForm from './MovieForm.js';
function App() {

const [movies, setMovies] = useState([])
const [searchQuery, setSearchQuery] = useState("")
    
useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then((resp) => resp.json())
    .then((data) => setMovies(data))

}, [])

function handleSearch(newsearch){
  setSearchQuery(newsearch)
}

const onAddMovie = (newMovie) => {
  setMovies([...movies, newMovie])
}
const onDelete= (data) => {
  const getMovie = movies.filter(movie => movie.id !== data.id)
  setMovies(getMovie)
};

  return (
    <div className="App">
      <Header />
      <MovieContainer searchQuery = {searchQuery} movies={movies} handleSearch={handleSearch} setMovies = {setMovies} onDelete={onDelete}/>
      <MovieForm movies = {movies} onAddMovie = {onAddMovie}/>
    </div>
  );
}

export default App;
