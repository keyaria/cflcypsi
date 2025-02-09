module.exports = {
  siteMetadata: {
    title: `CFLC`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,

      options: {

          baseUrl: `localhost:8888/clfc`,
          protocol: `http`,
          hostingWPCOM: false,
          useACF: true,
          verboseOutput: true,
          auth: {
            htaccess_user: "cflcypsi",
            htaccess_pass: "&uEpbUJ7b0UPTOxTac",
            htaccess_sendImmediately: false,

          },
          includedRoutes: [
          "**/posts",
          "**/pages",
          "**/tags",
          "/wp-api-menus/**",
          
        ],





      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
