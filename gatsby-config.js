const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    siteMetadata: {
        title: `Primitive Film Archive`,
        siteUrl: `https://primitiveskate.com`,
        description: `Full archive of Primtive's films throughout the years.`,
        author: `@artosousa`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
              /**
               * @property {boolean} [isResettingCSS=true]
               * if `false`, this plugin will not use `<CSSReset />
               */
              isResettingCSS: true,
              /**
               * @property {boolean} [isUsingColorMode=true]
               * if `false`, this plugin will not use <ColorModeProvider />
               */
              isUsingColorMode: false
              
            },
          },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
            
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: ['Oswald'],
              display: 'swap'
            }
        },
    ],
}