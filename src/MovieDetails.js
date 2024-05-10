import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function MovieDetails() {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const {name, year, director, image, info} = movie
    const [likes, setLikes] = useState(0)
    function handleLikeCount() {
    setLikes(likes + 1)
}

useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
    .then(resp => {
        if (resp.ok) {
            resp.json().then(data => setMovie(data) )
        }
    })
},[id])

    return (
        <div>
            <figure className="details">
            <h2>{name}</h2>
            
            <button className="stars" onClick={handleLikeCount}>{likes}⭐</button>
            <img src={image} alt={name}/>
            <section className="bio">
                <h4>{name}</h4>
                <p>Released: {year}</p>
                <p> Directed by {director}</p>
                <p className="infor">{info}</p>
                
                
            </section>
            </figure>
        </div>
    )
}
export default MovieDetails
/*
*/