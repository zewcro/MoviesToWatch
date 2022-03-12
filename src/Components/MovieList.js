const MovieList = (props) => {
    return(
       <>
            {props.movies.map( (movie, index) => (
                <div className="image-container d-flex justify-content-start m3">
                    <img src={movie.Poster} alt="movie_image" />

                </div>
            ))}
       </> 
    )
}


export default MovieList;