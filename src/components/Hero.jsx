/* import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const fetchedMovies = response.data.results;
      setMovies(fetchedMovies);
    });
  }, []);

  const truncate = (str, length) => {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [currentIndex, movies]);

  if (movies.length === 0) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  const { title, release_date, overview } = movies[currentIndex];

  return (
    <div className="w-full h-[450px] lg:h-[650px] relative overflow-hidden " >
      {movies.map((movie, index) => (
        <div
        key={index}
        className={`absolute w-full h-full ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <img
            className="w-full h-full object-cover object-top "
            src={createImageUrl(movie.backdrop_path, "original")}
            alt={movie.title}
          />
        </div>
      ))}
      <div className="absolute top-0 w-full h-[450px] lg:h-[650px] bg-gradient-to-r from-black" />
      <div className="absolute w-full top-[35%]  lg:top-[50%] p-4 md:p-5 text-white">
        <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
        <div className="mt-8 mb-4">
          <button className="capitalize border border-gray-300 bg-white text-black py-2 px-5">
            play
          </button>
          <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
            watch later
          </button>
        </div>
        <p className="text-gray-400 text-sm">{release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncate(overview, 165)}
        </p>
      </div>
    </div>
  );
};

export default Hero; */





import React, { useEffect, useState } from 'react';
import endpoints from '../services/movieServices';
import axios from 'axios';

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((resWponse) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);

  const truncate = (str, length) => {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  };

  if (Object.keys(movie).length === 0) {
    return <div>Loading...</div>;
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[450px] lg:h-[650px] max-sm:mb-10">
      <div className="w-full h-full">
        <div className="absolute w-full h-[450px] lg:h-[650px] bg-gradient-to-r from-[#0000007e]" />
        <div className="absolute w-full h-[450px] lg:h-[650px] bg-gradient-to-t from-black/100" />
        <img className="w-full h-full object-cover object-top" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />

        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border border-gray-300 bg-white text-black py-2 px-5">play</button>
            <button className="capitalize border border-gray-300 py-2 px-5 ml-4">watch later</button>
          </div>
          <p className="text-gray-400 text-sm">{truncate(release_date, 165)}</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
