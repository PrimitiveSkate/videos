import propTypes from 'prop-types';
import React from 'react';
import {Box, Image, Text, Flex, Divider,SimpleGrid,Link} from '@chakra-ui/react';

const VideoItem = props => {
    const {data} = props;
    return(
        <>
            <Flex flexGrow='1'>
                
                <Link _hover={ { textDecoration:'none' }} href={`./video/${data.slugs}`} >
                    <Box fontFamily='Oswald'>
                        <Image src={data.coverArt.file.url} />
                        <SimpleGrid columns='2' fontSize='1.3em' paddingTop='10px' paddingBottom='10px'>
                            <Text as="h1" fontFamily='Oswald'>
                                {data.title}
                            </Text>
                            <Text color='#999' justifyContent='right' textAlign='right' fontFamily='Oswald'>
                                {data.releaseYear}
                            </Text>
                        </SimpleGrid>
                        <Divider marginBottom='15px'/>
                        <Text as='p' color='#777' fontFamily='courier' fontSize='1rem' lineHeight='1.3rem'>{data.videoDescription.videoDescription}</Text>
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