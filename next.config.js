/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.movieposters.com',
			},
		]
	}
}

module.exports = nextConfig
