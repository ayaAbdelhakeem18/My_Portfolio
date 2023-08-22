import React from 'react'
import { Link } from 'react-router-dom'

function _404() {
  return (
    <div className='error-page'>
     <h2> Oops, The page you are looking for is not found ! </h2>
     <p className='btn cancel'><Link to={"/"}> Go back to home page</Link></p>
    </div>
  )
}

export default _404
