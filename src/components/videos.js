import React from 'react';
import VideoItem from './video-item';
import propTypes from 'prop-types';
import {SimpleGrid} from '@chakra-ui/react';

const Videos = props => {
    
    const {data} = props;
    console.log(data);
    return (
        <>
            <SimpleGrid w='100%' columns={['2','2','3','4']} spacing={5}>
                {data.videoItem.map((video, index) => {
                    return <VideoItem key={index} data={video} />;
                })}
            </SimpleGrid>
        </>
    );
};

Videos.propTypes = {
    data: propTypes.object
};

export default Videos;