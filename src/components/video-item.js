import propTypes from 'prop-types';
import React from 'react';
import {Box, Image, Text, Flex, Divider,List, ListItem, SimpleGrid} from '@chakra-ui/react';

const VideoItem = props => {
    const {data} = props;
    console.log(data);
    return(
        <>
            <Flex flexGrow='1'>
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
                    <Divider marginBottom='10px'/>
                    
                    <SimpleGrid columns='2'>
                        <Text as='p' color='#666'>Directors</Text>
                        <Text as='p' textAlign='right'>{data.directors}</Text>
                    </SimpleGrid>
                    <Divider margin='10px'/>
                    <SimpleGrid columns='2'>
                        <Text as='p' color='#666'>Featuring</Text>
                       
                        {data.chapters.map((chapter, index) => {
                            return <Text as='p' textAlign='right' key={index}>{chapter}</Text>;
                        })}
                        
                    </SimpleGrid> 

                </Box>
            </Flex>
        </>
    );
};

VideoItem.propTypes = {
    data: propTypes.object
}

export default VideoItem;