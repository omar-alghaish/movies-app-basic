import React from 'react'
import CardMovies from './Card'
import Paginationn from './pagination'
import "../css/movieslist.css"
const MoviesList = ({movies}) => {  
  return (
    <div className="movieslist">
    
    
{movies.length >= 1 ? (movies.map((mov) =>{return(<CardMovies key={mov.id} movies={mov} />)})) : <h1>no movies</h1>}
    </div>
  )
}
export default MoviesList