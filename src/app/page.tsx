import api from "@/utils/api";
import MovieList from "@/components/MovieList";
import Hero from "@/components/Hero";
import HeroDetails from "@/components/Hero/Details";

const Home = async () => {
  const movies = await api.getPopularMovies();
  const heroDetails = movies.slice(0, 5);

  return (
    <main className="w-full">
      <Hero details={heroDetails} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
