import ChevronRight from "../ChevronRight";
import MovieCard from "../MovieCard";

const MovieList: React.FC<{ movies: Movie[] }> = (props) => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-11 items-center max-w-5xl">
        <header className="flex justify-between items-center w-full">
          <h1 className="font-bold text-4xl">Featured Movies</h1>
          <button className="flex items-center gap-2 text-rose-700 text-lg">
            See more
            <ChevronRight />
          </button>
        </header>
        <div className="grid grid-cols-4 gap-8 w-full">
          {props.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
