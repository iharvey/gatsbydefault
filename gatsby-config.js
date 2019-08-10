module.exports = {
  siteMetadata: {
    title: `Gatsby Default Test`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ioharvey`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tty29peqdsql`,
        accessToken: `MSGUVY4yMrSsa_zsxzgrfVFizeOJl6V-BpT0CQMBJAQ`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-eslint",
    //   options: {
    //     test: /\.js$|\.jsx$/,
    //     exclude: /(node_modules|.cache|public)/,
    //     stages: ["develop"],
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-top-layout`,
    `gatsby-transformer-remark`,
    // `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        tsLoader: {
          logLevel: 'warn',
        },
        fileName: `types/graphqlTypes.ts`,
        codegen: true,
        codegenDelay: 250,
        alwaysCheck: false,
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        /* eslint-ensable @typescript-eslint/camelcase */
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
