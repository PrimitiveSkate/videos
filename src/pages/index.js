import React from 'react';

import { Flex, Box} from "@chakra-ui/react";
import {Helmet} from 'react-helmet';
import Header from '../components/header';
import Videos from '../components/videos';
import FeaturedVideo from '../components/featured-video';
import Favicon from '../assets/favicon.webp';
import OgImage from '../assets/ogImage.jpg';

export default function Index() {
    
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Primitive Video Archive</title>
                <meta 
                    name='description'
                    content='An archive of Primitive videos throughout the years!'
                />
                <meta 
                    property='og:image' 
                    content={OgImage} 
                />
                <link rel="shortcut icon" href={Favicon} />

            </Helmet>
            <Header />
            <Flex width="100%" flexDirection='column' padding="0px" justifyContent='center'> 
                <FeaturedVideo />
                <Box padding='0px 25px 50px 25px '>
                    <Videos  />
                </Box>
            </Flex>
            
        </>
    );
}

