import type { Meta, StoryObj } from "@storybook/react";

import MovieCard from ".";

const meta: Meta<typeof MovieCard> = {
	title: "Components/MovieCard",
	component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Default: Story = {
	args: {
		movie: {
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
	},
};
