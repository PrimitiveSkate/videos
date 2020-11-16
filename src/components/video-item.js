import propTypes from 'prop-types';
import React from 'react';
import {Box, Image, Text, Flex, Divider,SimpleGrid} from '@chakra-ui/react';

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
                    {
                        data.chapters.map((item) => {
                            const chapterArr = item.split(' - ');
                            const chapterName = chapterArr[0];
                            const timestamp = chapterArr[1];
                            return (
                                <Text>{chapterName}</Text> 
                            );
                        })
                    }
                </Box>
            </Flex>
        </>
    );
};

VideoItem.propTypes = {
    data: propTypes.object
}

export default VideoItem;