import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
function MovieForm () {

    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [director, setDirector] = useState("")
    const [image, setImage] = useState("")
    const [info, setInfo] = useState("")

    const {movies, onAddMovie} = useOutletContext()

    function handleName(event) {
        setName(event.target.value)
    }
    function handleYear(event) {
        setYear(event.target.value)
    }
    function handleDirector(event) {
        setDirector(event.target.value)
    }
    function handleImage(event) {
        setImage(event.target.value)
    }
    function handleInfo(event) {
        setInfo(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        const newMovie = {
          id: `${movies.length+1}`,
          name: name,
          year: year,
          director: director,
          image: image,
          info: info
        }
        onAddMovie(newMovie)
        fetch("http://localhost:3001/movies", {
          method: "POST",
          header: {"Content-type": "application/json"},
          body: JSON.stringify(newMovie)
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    
        /*useEffect(()=> {
          fetch("http://localhost:3001/movies")
          .then((resp) => resp.json())
          .then(setMovies)
    
          return ()=> {
            console.log("cleaning up")
          }
        }, [])
    */
    }
    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Movie Title: 
            </label>
            <input id="name" type="text" value ={name} onChange={handleName}/>
      
            <label htmlFor="year">
                Release Year: 
            </label>
            <input id="year" type="text" value ={year} onChange={handleYear}/>
       
            <label htmlFor="diretor">
                Director: 
            </label>
            <input id="director" type="text" value ={director} onChange={handleDirector}/>
        
            <label htmlFor="image">
                Poster: 
            </label>
            <input id="image" type="text" value ={image} onChange={handleImage}/>
       
            <label htmlFor="info">
                Description: 
            </label>
            <input id="info" type="text" value ={info} onChange={handleInfo}/>
            <button type="submit" value="create movie">Add Movie</button>
        </form>
        </div>
        
    )
}
export default MovieForm