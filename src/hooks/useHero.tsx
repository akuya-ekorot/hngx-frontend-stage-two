import api from "@/utils/api";
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

  // get trailer of active movie
  useEffect(() => {
	const getTrailer = async () => {
	  const videos = await api.getTrailer(activeMovie.id);
	  videos.length > 0 && videos[0].key && setActiveMovie((prev) => ({ ...prev, trailer: videos[0].key }));
	};

	getTrailer();
  }, [activeMovie]);

  return activeMovie;
};

export default useHero;
