import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow';
import endpoints from '../services/movieServices';

const Home = () => {
  return (
   <>
   <Hero />
   <MovieRow title="Upcoming" url={endpoints.upcoming}/>
   <MovieRow title="Trending" url={endpoints.trending}/>
   <MovieRow title="Top Rated" url={endpoints.topRated}/>
   <MovieRow title="comedy" url={endpoints.comedy}/>
   <MovieRow title="popular" url={endpoints.popular}/>
   </>
  )
}

export default Home;