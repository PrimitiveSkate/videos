import React from 'react';
import {graphql,Link as GatsbyLink} from 'gatsby';
import {Box,Button, Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, } from '@chakra-ui/react';

const VideoPlayer = (props) => {
    
    const {videoUrl, chapters, slugs} = props.data.contentfulVideo;
    const videoId = videoUrl.videoUrl.split('=').pop();
    
    return(
        <>
            <Button as={GatsbyLink} to={`/video/${slugs}`} colorScheme='yellow' pos='absolute' right='15px' top='15px'>X</Button>
            <Button colorScheme='yellow' pos='absolute' right='15px' bottom='50px'>Chapters</Button>
            <Box as='iframe' w='full' h='100vh' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="autoplay"/>
        </>
    )
}

export const pageQuery = graphql`
    query PlayerQuery($id: String!) {
        contentfulVideo(id: {eq: $id}) {
            chapters
            videoUrl {
                videoUrl
            }
            slugs
        }
    }
`

export default VideoPlayer;