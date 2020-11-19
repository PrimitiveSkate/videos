import propTypes from 'prop-types';
import React from 'react';
import Img from "gatsby-image";
import {Box, Text, Flex, Divider,Link} from '@chakra-ui/react';

const VideoItem = props => {
    
    const {data} = props;
    return(
        <>
            <Flex flexGrow='1'>
                <Link _hover={ { textDecoration:'none' }} href={`/video/${data.slugs}`} display='inline-flex' width='100%' textTransform='uppercase'>
                    <Box fontFamily='Oswald' pos='relative' width='100%'>
                        <Img 
                            fluid={data.coverArt.fluid} 
                            key={data.coverArt.fluid.src}
                            alt={data.title}
                        />
                        <Text as="h1" fontSize={['0.8em','0.9em','1.3em','1.3em']} fontFamily='Oswald' w='100%'>
                            {data.title}
                        </Text>
                        <Text color='#999'  textAlign='left' w='100%' fontFamily='Oswald' marginTop={['-4px','-4px','-7px','-7px']} marginBottom='4px'>
                            {data.releaseYear}
                        </Text>
                    </Box>
                </Link>
            </Flex>
            
        </>
    );
};

VideoItem.propTypes = {
    data: propTypes.object
}

export default VideoItem;