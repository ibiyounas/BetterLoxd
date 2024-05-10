import { useState, useEffect } from "react";
import React from "react";

import MovieCard from "./MovieCard";

function MovieContainer({ searchQuery, movies, handleSearch, onDelete }) {

    const results = movies.filter((project) => (
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    const movieCard = results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} id = {movie.id} info = {movie.info} image ={movie.image} name = {movie.name} onDelete={onDelete}/>
      ));
      console.log(movieCard)
      return (
        <section>
          <h2></h2>
          <input type="text" placeholder="Search for titles" onChange={(e) => handleSearch(e.target.value)} value={searchQuery}/>
            <h3>Movies</h3>
          <ul className="cards">{movieCard}</ul>
        </section>
      );
    
}

export default MovieContainer;
