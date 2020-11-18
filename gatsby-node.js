const Promise = require('bluebird');
const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const result = await graphql(
        `
            {
                allContentfulVideo {
                    nodes {
                        slugs
                        id
                    }
                }
            }
        `
    );

    result.data.allContentfulVideo.nodes.forEach((post, index, posts) => {
        actions.createPage({
            path: `/video/${post.slugs}/`,
            component: require.resolve('./src/templates/video-page'),
            context: {
                id: post.id,
            }
        });
        // actions.createPage({
        //     path: `/video/${post.slugs}/player`,
        //     component: require.resolve('./src/templates/video-player'),
        //     context: {
        //         id: post.id,
        //     }
        // });
    });
};