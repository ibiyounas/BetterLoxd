import React, {useState} from "react"

function MovieCard({movie}) {

    const [likes, setLikes] = useState(0)
    function handleLikeCount() {
    setLikes(likes + 1)
}


    return (
        <article>
        <h3>{movie.name}</h3>
        <p></p>
        <button onClick={handleLikeCount}>{likes} likes</button>
        </article>
    )
}
export default MovieCard