import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movielist from '../pages/Movielist'
import Moviedetails from '../pages/Moviedetails'
import Search from '../pages/Search'
import Pagenotfound from '../pages/Pagenotfound'

const Allroute = () => {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Movielist title="Home"   apipath="movie/now_playing" />} />
        <Route path="movies/toprated" element={<Movielist title="toprated movies" apipath="movie/top_rated"/>}  />
        <Route path='movies/popular' element={<Movielist title="popular movies" apipath="movie/popular"/>}  />
        <Route path='movies/upcoming' element={<Movielist title="upcoming movies" apipath="movie/upcoming"/>}  />
        <Route path='movie/:id' element={<Moviedetails/>}/>
          <Route path='Search' element={<Search apipath="search/movie"/>}/>
              <Route path='*' element={<Pagenotfound/>} title="page not found"/>

      </Routes>
      
    </div>
  )
}

export default Allroute
