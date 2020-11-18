import React from 'react';
import VideoItem from './video-item';
import propTypes from 'prop-types';
import {SimpleGrid} from '@chakra-ui/react';

const Videos = props => {
    const {data} = props;
    return (
        <>
            <SimpleGrid columns={['1','1','3','4']} spacing={10}>
                {data.nodes.map((video, index) => {
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