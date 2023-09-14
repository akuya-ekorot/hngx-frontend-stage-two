import api from "@/utils/api";
import Image from "next/image";
import FavoriteIcon from "../FavoriteIcon";

const MovieCard = async ({ movie }: { movie: Movie }) => {
  const genres = await api.getMovieGenres(movie.genre_ids);

  return (
    <article className="flex flex-col gap-[12px] font-bold w-[250px]">
      <div className="relative">
        <div className="absolute top-4 right-4">
          <FavoriteIcon />
        </div>
        <Image
          className="w-[250px] h-[370px] object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`}
          height={370}
          width={250}
          alt={movie.title}
        />
      </div>
      <div className="flex flex-row items-center gap-[0.2em] text-xs text-gray-400">
        {/* movie.countries.map((country) => (
					<p key={country}>{country}</p>
				))*/}
        <p>-</p>
        <p>{new Date(movie.release_date).getFullYear()}</p>
      </div>
      <h2 className="text-gray-900 text-lg">{movie.title}</h2>
      <div className="flex flex-row items-center gap-[0.2em] text-xs text-gray-400">
        {genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
    </article>
  );
};

export default MovieCard;
