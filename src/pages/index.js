import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { Flex} from "@chakra-ui/react";
import {Helmet} from 'react-helmet';
import Header from '../components/header';
import Videos from '../components/videos';

export default function Index() {
    const data = useStaticQuery(
        graphql`
            query MyQuery {
                videos: allContentfulVideo(sort: {fields: [releaseYear], order: DESC}) {
                    nodes {
                    title
                    contentful_id
                    coverArt {
                        description
                        id
                        file {
                        url
                        }
                        title
                    }
                    id
                    releaseYear
                    videoType
                    videoDescription {
                        videoDescription
                    }
                    slugs
                    }
                }
            }
        `
    );
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Primitive Video Archive</title>
                <meta 
                    name='description'
                    content='An archive of Primitive videos throughout the years!'
                />
            </Helmet>
            <Header />
            <Flex width="100%" padding="0px 20px" marginTop="25px" > 
                <Videos data={data.videos} />
            </Flex>
            
        </>
    );
}

