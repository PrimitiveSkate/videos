import React from 'react';
import Header from '../components/header';
import {graphql, Link as GatsbyLink} from 'gatsby';
import {AspectRatio,Box,Button, Divider,Grid, GridItem, Icon, Flex, Link, List, ListItem, Text } from '@chakra-ui/react';


const VideoPage = (props) => {
    const {title,releaseYear,coverArt,videoDescription,directors,filmers, chapters, videoType, artDirector,videoUrl} = props.data.contentfulVideo;
    const youtubeId = videoUrl.videoUrl.split('=').pop();
    console.log(props.data);
    
    return (
        <>
            <Header />
            
            <Flex position='relative' h='100vh' w='100%'  backgroundImage={`url(${coverArt.file.url})`} backgroundPosition='center' backgroundSize='cover'>
                
                <Flex justifyContent='center'  w='100%'  fontFamily='Oswald' textTransform='uppercase' color='#000' backgroundImage='linear-gradient(0deg, rgba(255,255,255,1) 69%, rgba(255,255,255,0) 85%)'>
                    <Box w='75%' marginTop='20vh'>
                        <Text as='h1' fontSize='2.5rem'>{title}</Text>
                        <Divider borderColor='#777' />
                        
                        <Text as='p' fontFamily='courier'>
                            {videoType} | 
                            Release Date: {releaseYear} | 
                            Directed By: 
                            {directors.map((director, index) =>{
                                return <span key={index}> { (index ? ', ' : '') + director }</span>
                            })} | 
                            Filmed By: 
                            {filmers.map((filmer, index) =>{
                                return <span key={index}> { (index ? ', ' : '') + filmer }</span>
                            })}
                        </Text>
                       
                        <Divider borderColor='#777' marginBottom='10px' />
                        <Grid templateColumns='repeat(4,1fr)' gap={1} fontFamily='courier'>
                            <GridItem colSpan={3} paddingTop='5px'>
                                
                                <AspectRatio ratio={16 / 9} >
                                    <iframe src={`https://www.youtube.com/embed/${youtubeId}`}  />
                                </AspectRatio>
                                <Text marginBottom='25px' marginTop='25px' fontFamily='Oswald' as='p' color='#666' fontSize='1.2rem' >
                                    {videoDescription.videoDescription}
                                </Text>
                                <Text as='p' color='#666'>
                                    Additional Credits:
                                </Text>
                                <Text>
                                    Art Direction: {artDirector} <br/>
                                    
                                </Text>
                            </GridItem>
                            
                            <GridItem colStart={4} paddingLeft='25px' >
                                <Text as='h2' color='#666' fontSize='1.2rem' borderBottom='solid 1px #e9e9e9'>
                                    Chapters:
                                </Text>
                                <List>
                                    {chapters.map((chapter, index) => {
                                        const chapterArr = chapter.split(' - ');
                                        const chapterName = chapterArr[0];
                                        const chapterTime = chapterArr[1];

                                        return (
                                            <ListItem  key={index} p='5px' borderBottom='solid 1px #e9e9e9'>
                                                <Box as={GatsbyLink} to='#'  _hover={{ textDecoration: 'underline' }}>{chapterName}  <Box position='relative' float='right' color='yellow'>{chapterTime}</Box></Box>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </GridItem>
                            
                        </Grid>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export const pageQuery = graphql`
    query VideoQuery($id: String!) {
        contentfulVideo(id: {eq: $id}) {
            artDirector
            chapters
            coverArt {
                file {
                    url
                }
                title
            }
            title
            releaseYear
            music
            filmers
            executiveProducers
            directors
            stillPhotography
            videoType
            videoDescription {
                videoDescription
            }
            videoUrl {
                videoUrl
            }
            slugs
        }
    }
`

export default VideoPage;