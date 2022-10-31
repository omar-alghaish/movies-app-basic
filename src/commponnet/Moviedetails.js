import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Moviedetails = () => {
  const params = useParams()
  console.log(params.id)
  return (
    <div>Moviedetails</div>
  )
}
export  default Moviedetails