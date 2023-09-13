interface Genre {
	id: number;
	name: string;
}

interface Movie {
	id: number;
	name: string;
	posterUrl: string;
	releaseDate: string;
	genres: Genre[];
	countries: string[];
	imdbId: string;
}
