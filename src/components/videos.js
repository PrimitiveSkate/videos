import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import VideoItem from './video-item';
import {SimpleGrid} from '@chakra-ui/react';

export default function Videos(){
    const data = useStaticQuery(
        graphql`
            query MyQuery {
                videos: contentfulVideoList {
                    videoItem {
                        id
                        releaseYear
                        title
                        slugs
                        coverArt {
                            fluid(maxWidth: 960) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        `
    );
    return(
        <>
           <SimpleGrid w='100%' columns={['2','2','3','4']} spacing={5} >
                {data.videos.videoItem.map((video, index) => {
                    return <VideoItem key={index} data={video} />;
                })}
            </SimpleGrid>
        </>
    )
};