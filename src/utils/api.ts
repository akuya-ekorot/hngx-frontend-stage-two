/**
 * API class for fetching data from TMDB
 * @param key: string
 * @method getPopularMovies: fetches popular movies from TMDB
 * @method getMovieDetails: fetches movie details from TMDB
 * @returns data: object
 * @example
 * import api from "@/utils/api";
 * import { NextResponse } from "next/server";
 *
 * export async function GET() {
 *   return NextResponse.json(await api.getMovieDetails(346698));
 *   }
 */
class Api {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  // Get Popular Movies
  async getPopularMovies(): Promise<Movie[]> {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1`,
    );
    const data = await res.json();
    return data.results;
  }

  // Get Movie Details
  async getMovieDetails(id: number) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`,
    );
    const data = await res.json();
    return data;
  }

  // Get Movie Genres
  async getMovieGenres(genreIds: number[]) {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=en-US`,
    );
    const data = await res.json();
    const genres = data.genres.filter((genre: Genre) =>
      genreIds.includes(genre.id),
    );
    return genres as Genre[];
  }


  // Get Backdrop Image
  async getBackdropImage(path: string) {
	const res = await fetch(
	  `https://image.tmdb.org/t/p/original${path}`,
	);
	const data = await res.json();
	return data;
  }
}

export default new Api(process.env.NEXT_PUBLIC_TMDB_KEY!);
