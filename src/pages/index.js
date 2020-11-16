import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { Flex, Divider, Image } from "@chakra-ui/react";
import {Helmet} from 'react-helmet';
import Logo from '../assets/primitive_video.svg';
import Videos from '../components/videos';

export default function Index() {
    const data = useStaticQuery(
        graphql`
        query MyQuery {
            videos: allContentfulVideo(sort: {fields: [releaseYear], order: DESC}) {
              nodes {
                title
                artDirector
                chapters
                contentful_id
                coverArt {
                  description
                  id
                  file {
                    url
                  }
                  title
                }
                directors
                executiveProducers
                filmers
                id
                info {
                  raw
                }
                music
                releaseYear
                stillPhotography
                videoType
                videoUrl {
                  videoUrl
                  id
                }
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
            <Flex padding="20px" >
                <Flex bg='#fff' alignItems='center' flexDir='column' w="100%" >
                    <Image src={Logo} w='300px' alignItems='center' marginBottom="25px"/>
                    <Divider />
                </Flex>
            </Flex>
            <Flex width="100%" padding="0px 20px" > 
                <Videos data={data.videos} />
            </Flex>
            
        </>
    );
}

