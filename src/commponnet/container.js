import React from 'react'
import MoviesList from './MoviesList'
import '../css/container.css'
import Paginationn from './pagination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Moviedetails from './Moviedetails'

const Container = ({ movies, pagenumber, pagecount }) => {
  console.log(movies)

  return (
    <div className="containerr">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
            <MoviesList movies={movies} />
            <Paginationn pagenumber={pagenumber} pagecount={pagecount} />
          </div>} />
          <Route path="/movie/:id" element={<Moviedetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Container