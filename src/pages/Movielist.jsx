import React, { useEffect } from 'react'
import '../components/Back.css'
import Card from '../components/Card'
import Fetch from '../hooks/Fetch'
import photo1 from '../assets/John Wick Tattoo Wallpaper Tattoo Ideas.jpg'
import photo2 from '../assets/wp12086611-fight-club-poster-wallpapers.jpg'
import photo3 from '../assets/download.jpg'


const Movielist = ({title,apipath}) => {
  const {data:movies}=Fetch(apipath)
  useEffect(()=>{
    document.title=title;
  })
  return (
    <div class='container-fulid  '>
  {title === "Home" && movies.length > 0 && (
  <div className="w-full overflow-hidden relative">
    <div className="flex animate-scroll w-[9999px]">
      {movies.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
          className="h-[500px] w-[900px] object-cover"
        />
      ))}
    </div>
  </div>
)}



          <div>
      
      <div class='container-fulid mx-auto  gap-5   space-y-9  ms-4 mt-32 grid grid-cols-3'>
       {movies.map((movie)=>{return <Card key={movie.id} movie={movie}/> })}
       
      </div>
    </div>
    </div>
  )
}

export default Movielist
