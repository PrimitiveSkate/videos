import propTypes from 'prop-types';
import {Link as GatsbyLink} from 'gatsby';
import React from 'react';
import Img from "gatsby-image";
import {Box,Button, Text, Flex,Link} from '@chakra-ui/react';

const FeaturedItem = props => {
    
    const {data} = props;
    return(
        <>
            <Flex flexGrow='1' justifyContent='center' >
                
                    <Box fontFamily='Oswald' pos='relative'  width={['100%','100%','65%','65%']} pos='relative'>
                        <Img 
                            fluid={data.coverArt.fluid} 
                            key={data.coverArt.fluid.src}
                            alt={data.title}
                        />
                        <Box pos='absolute' background='rgba(0,0,0,0.5)' top='0' left='0' boxSize='full' flexDir='column' display='inline-flex' justifyContent='center' alignItems='center'>
                            <Box display='inline-flex'>
                                <Text as="h1" fontSize={['1.7','1.7em','2em','2em']} fontFamily='Oswald' color='#fff' textTransform='uppercase' marginBottom='10px'>
                                    {data.title}
                                </Text>
                            </Box>
                            <Box display='inline-flex'>
                                <Button as={GatsbyLink} p='0 50px' fontWeight='normal' colorScheme='yellow' to={`/video/${data.slugs}`}>
                                    Watch Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    
            </Flex>
            
        </>
    );
};

FeaturedItem.propTypes = {
    data: propTypes.object
}

export default FeaturedItem;