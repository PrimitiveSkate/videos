import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import FeaturedItem from './featured-item';
import {Box, Divider} from '@chakra-ui/react';

export default function FeaturedVideo(){
    const data = useStaticQuery(
        graphql`
            query featureQuery {
                video: contentfulFeaturedList {
                    featuredVideo {
                        id
                        releaseYear
                        videoType
                        releaseYear
                        directors
                        title
                        chapters
                        slugs
                        coverArt {
                            fluid(maxWidth: 1920) {
                                ...GatsbyContentfulFluid
                            }
                        }
                        videoDescription {
                            videoDescription
                        }
                    }
                }
            }
        `
    );
    let vidArr = [];
    vidArr.push(data.video.featuredVideo);
    console.log(vidArr);
    return(
        <>
           <Box display='inline-flex' w='100%' marginBottom='25px'>
                {vidArr.map((video, index) => {
                    return <FeaturedItem key={index} data={video} />;      
                })}
            </Box>
            <Divider marginBottom='25px' />
        </>
    )
};