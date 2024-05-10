import { useState, useEffect } from "react";
import React from "react";

import MovieCard from "./MovieCard";

function MovieContainer() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then((resp) => resp.json())
        .then((data) => setMovies(data))

    }, [])

    const displayMovies = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />))
    
    return (
        <div>
            {displayMovies}
        </div>
    )
    
}

export default MovieContainer;
