import api from "@/utils/api";
import MovieList from "@/components/MovieList";
import Hero from "@/components/Hero";

const Home = async () => {
  const movies = await api.getPopularMovies();
  const backdrops = movies.map((movie) => movie.backdrop_path);

  return (
    <main className="w-full">
      <Hero backdrops={backdrops} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
