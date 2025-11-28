import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/laptop.jpeg';
import Moviedetails from '../pages/Moviedetails';

const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : photo;

  return (
    <div
      className="text-green-600 border border-gray-300 h-[480px] w-full max-w-sm shadow-lg rounded-lg overflow-hidden bg-black transition hover:scale-105 hover:shadow-2xl duration-300"
      title={title}
    >
      <img className="h-64 w-full object-cover" src={image} alt={title} />

 
      <p className="px-4 pt-3 text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent line-clamp-1">
        {title}
      </p>
 
      <p className="line-clamp-3 text-green-300 px-4 pt-1 text-sm text-justify">
        {overview}
      </p>
 
      <div className="flex justify-between items-center px-4 mt-5">
    
        <Link
          to={`/movie/${id}`}
          className="text-sm font-semibold border border-green-500 px-3 py-1 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-lime-400 hover:to-emerald-600 transition"
        >
          Read More
        </Link>
 
        <p className="text-sm text-white">
          ⭐⭐⭐ {vote_average} | {vote_count}
        </p>
      </div>
    </div>
  );
};

export default Card;
