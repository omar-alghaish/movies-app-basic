
import axios, { Axios } from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navebar from './commponnet/Navbar';
import Container from './commponnet/container';
import Moviedetails from './commponnet/Moviedetails';
import {useSelector, useDispatch} from 'react-redux'


function App() {


const dispatch = useDispatch();

  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const urlApi = "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"

  const getAllMovies = async () => {
    const res = await axios.get(urlApi);
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }


  const getpagenumber = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=` + page);
    setMovies(res.data.results)
  }

  useEffect(() => {
    getAllMovies()

  }, [])

  const search = async (word) => {
    if (word === "") {
      getAllMovies()
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=` + word + `&language=ar-US&page=1&include_adult=false`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }
  return (
    <div>
      <Navebar search={search} />
      <Container movies={movies} pagenumber={getpagenumber} pagecount={pageCount} />
      </div>
  )
}

export default App
