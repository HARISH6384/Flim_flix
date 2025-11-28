import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import photo1 from '../assets/laptop.jpeg';

const Moviedetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : photo1;

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    document.title = movie.title || 'Movie Details';
  }, [movie.title]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title with green gradient */}
      <h1 className="text-center  text-3xl font-bold  text-white  mb-8">
        {movie.title}
      </h1>

      {/* Movie Info Layout */}
      <div className="flex flex-col lg:flex-row gap-8 bg-black shadow-lg rounded-lg p-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={movie.title}
            className="w-full max-w-xs h-auto object-cover rounded"
          />
        </div>

        {/* Movie Details */}
        <div className="flex-grow space-y-4 ">
          {/* Title (again, optional) */}
          <h2 className="text-2xl font-semibold text-green-400 ">{movie.title}</h2>

          {/* Overview */}
          <p className=" text-justify text-sm leading-relaxed text-green-400 line-clamp-5">
            {movie.overview}
          </p>

          {/* Genres */}
          {movie.genres && (
            <div className="flex flex-wrap gap-2 pt-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Ratings */}
          <div className="pt-2 text-sm text-white">
            <span className="mr-2">⭐⭐⭐</span>
            {movie.vote_average} | {movie.vote_count}
          </div>

          {/* Movie Details Table */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-gray-300 text-center">
              <tbody>
                <tr className="border-b">
                  <th className="p-2 text-white">Runtime</th>
                  <td className="p-2 text-white">{movie.runtime} mins</td>
                </tr>
                <tr className="border-b">
                  <th className="p-2 text-white">Revenue</th>
                  <td className="p-2 text-white">${movie.revenue?.toLocaleString()}</td>
                </tr>
                <tr className="border-b">
                  <th className="p-2 text-white">Budget</th>
                  <td className="p-2 text-white">${movie.budget?.toLocaleString()}</td>
                </tr>
                <tr>
                  <th className="p-2 text-white">Release Date</th>
                  <td className="p-2 text-white">{movie.release_date}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* IMDb Link Button */}
          {movie.imdb_id && (
            <div className="pt-4">
              <Link
                to={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded transition"
              >
                View on IMDb
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
