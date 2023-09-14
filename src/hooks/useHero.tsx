import { useEffect, useState } from "react";

const useHero = (movies: Movie[]) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  const heroMovies = movies.map((movie) => ({
    ...movie,
    backdrop: base_url + movie.backdrop_path,
  }));

  const [activeMovie, setActiveMovie] = useState(heroMovies[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActiveMovie(heroMovies[i]);
      i = (i + 1) % heroMovies.length;
    }, 5000);

	return () => clearInterval(interval);
  }, []);

  return activeMovie;
};

export default useHero;
