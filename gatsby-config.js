const dotenv = require('dotenv');
dotenv.config();

const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `Primitive Film Archive`,
        siteUrl: `https://primitiveskate.com`,
        description: `Full archive of Primtive's films throughout the years.`,
        author: `@artosousa`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        {
          resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
          options: {
            // Fields to index
            fields: ['title', 'chapters', 'slugs', 'videoType', 'videoDescription', 'releaseYear', 'videoTags', 'filmers', 'coverArt'],
            // How to resolve each field's value for a supported node type
            resolvers: {
              ContentfulVideo: {
                title: node => node.title,
                chapters: node => node.chapters,
                slugs: node => node.slugs,
                videoType: node => node.videoType,
                videoDescription: node => node.videoDescription,
                releaseYear: node => node.releaseYear,
                videoTags: node => node.videoTags,
                filmers: node => node.filmers,
                coverArt: (node, getNode) => getNode(node.coverArt___NODE)
              }
            }
          }
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-MZTQ767",
        
              // Include GTM in development.
              //
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: false,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              defaultDataLayer: { platform: "videosLibrary" }
            }
        },
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