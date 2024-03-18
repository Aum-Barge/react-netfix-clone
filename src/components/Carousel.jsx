import React, { useState } from 'react';
import Slider from 'react-slick';
import { createImageUrl } from "../services/movieServices";

const Carousel = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prevSlide, nextSlide) => setCurrentSlide(nextSlide),
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={movie.id || index}>
            <img
              className="w-full h-full object-cover object-top"
              src={createImageUrl(movie.backdrop_path, "original")}
              alt={movie.title || 'Movie'}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-center text-white">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`text-2xl cursor-pointer ${
              index === currentSlide ? 'text-blue-500' : 'text-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;