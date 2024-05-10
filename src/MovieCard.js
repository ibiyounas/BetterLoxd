import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
function MovieCard({ id, info, director, image, name, onDelete, movie }) {

    const [likes, setLikes] = useState(0)
    function handleLikeCount() {
    setLikes(likes + 1)
}
    const handleDelete = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "DELETE",
    })
     .then(res => res.json())
     .then((movie) => onDelete(movie))
  }

  const navigate = useNavigate()

  function handleNavigate() {
    navigate(`/movies/${id}`)
  }
    return (
    <li className="card" onClick={handleNavigate}>
        <figure className="image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleLikeCount}>💖{likes}</button>
          <button classname="trash" onClick={handleDelete}>🗑️</button>
        </figure>
  
        <section className="details">
          <h4>{name}</h4>
          <p>Director: {director}</p>
          </section>
    </li>
    )
}
export default MovieCard