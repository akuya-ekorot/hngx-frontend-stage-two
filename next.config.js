/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.movieposters.com',
			},
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
		]
	}
}

module.exports = nextConfig
