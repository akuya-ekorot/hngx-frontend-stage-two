import Image from "next/image";
import FavoriteIcon from "../FavoriteIcon";

const MovieCard = ({ movie }: { movie: Movie }) => {
	return (
		<article className="flex flex-col gap-[12px] font-bold w-[250px]">
			<div className="relative">
				<div className="absolute top-4 right-4">
					<FavoriteIcon />
				</div>
				<Image
					className="w-[250px] h-[370px] object-cover"
					src={movie.posterUrl}
					height={370}
					width={250}
					alt={movie.name}
				/>
			</div>
			<div className="flex flex-row items-center gap-[0.2em] text-xs text-gray-400">
				{movie.countries.map((country) => (
					<p key={country}>{country}</p>
				))}
				<p>-</p>
				<p>{new Date(movie.releaseDate).getFullYear()}</p>
			</div>
			<h2 className="text-gray-900 text-lg">{movie.name}</h2>
			<div className="flex flex-row items-center gap-[0.2em] text-xs text-gray-400">
				{movie.genres.map((genre) => (
					<p key={genre.id}>{genre.name}</p>
				))}
			</div>
		</article>
	);
};

export default MovieCard;
