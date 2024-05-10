import React, {useState} from "react"

function MovieCard({ id, info, image, name, onDelete, movie }) {

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

    return (
    <li className="card">
        <figure className="image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleLikeCount}>👏{likes}</button>
          <button onClick={handleDelete}> Delete</button>
        </figure>
  
        <section className="details">
          <h4>{name}</h4>
          <p>{info}</p>
          </section>
    </li>
    )
}
export default MovieCard