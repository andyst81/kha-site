module.exports = {
	siteMetadata: {
		title: 'Kha... Gastrobar',
		author: 'Andy T',
		imageUrl: 'https://kha-gastrobar.com/static/kha-bced051a6a8fa4c35d77333199499a48.png',
		description: 'Modern Thai Dining and awesome drinks on Soi Suan Phlu',
		keywords: 'Thai food, cocktails, wine, modern Thai food, drinks, cozy',
		twitter: 'https://twitter.com/andyst81',
		github: `https://github.com/andyst81`,
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: 'https://kha-gastrobar.com'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/icon.png',
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-186425733-1',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
