import Image from "next/image";
import MovieCard from "@/components/MovieCard";
import MovieList from "@/components/MovieList";

const Home = () => {
  return (
    <main>
      <MovieList
        movies={[
          {
            id: 550,
            name: "Spider Man",
            posterUrl:
              "https://www.movieposters.com/cdn/shop/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742",
            releaseDate: "2023-03-13",
            genres: [
              { id: 1, name: "Action" },
              { id: 2, name: "Adventure/Horror" },
            ],
            countries: ["US"],
            imdbId: "random-id",
          },
          {
            id: 550,
            name: "Spider Man",
            posterUrl:
              "https://www.movieposters.com/cdn/shop/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742",
            releaseDate: "2023-03-13",
            genres: [
              { id: 1, name: "Action" },
              { id: 2, name: "Adventure/Horror" },
            ],
            countries: ["US"],
            imdbId: "random-id",
          },
          {
            id: 550,
            name: "Spider Man",
            posterUrl:
              "https://www.movieposters.com/cdn/shop/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742",
            releaseDate: "2023-03-13",
            genres: [
              { id: 1, name: "Action" },
              { id: 2, name: "Adventure/Horror" },
            ],
            countries: ["US"],
            imdbId: "random-id",
          },
          {
            id: 550,
            name: "Spider Man",
            posterUrl:
              "https://www.movieposters.com/cdn/shop/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742",
            releaseDate: "2023-03-13",
            genres: [
              { id: 1, name: "Action" },
              { id: 2, name: "Adventure/Horror" },
            ],
            countries: ["US"],
            imdbId: "random-id",
          },
        ]}
      />
    </main>
  );
};

export default Home;
