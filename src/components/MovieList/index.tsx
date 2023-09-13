import ChevronRight from "../ChevronRight";
import MovieCard from "../MovieCard";

const MovieList: React.FC<{ movies: Movie[] }> = (props) => {
  return (
    <section className="flex flex-col gap-11 items-center">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-4xl">Featured Movies</h1>
        <button className="flex items-center gap-2 text-rose-700 text-lg">
          See more
          <ChevronRight />
        </button>
      </header>
      <div className="grid grid-cols-4 w-full max-w-5xl">
        {props.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
