import React,{useRef} from 'react';
import YouTube from 'react-youtube';
import {Helmet} from 'react-helmet';
import Header from '../components/header';
import {graphql, Link as GatsbyLink} from 'gatsby';
import {AspectRatio,Box,Button, Divider, Flex, Link, List, ListItem, Text } from '@chakra-ui/react';
import Videos from '../components/videos';
import Favicon from '../assets/favicon.webp';
import OgImage from '../assets/ogImage.jpg';

const VideoPage = (props) => {
    const player = useRef();
    const {title,releaseYear,coverArt,executiveProducers,music,videoDescription,directors,filmers, chapters, videoType, artDirector,videoUrl,stillPhotography} = props.data.contentfulVideo;
    const youtubeId = videoUrl.videoUrl.split('=').pop();

    const opts = {
        height: '100%',
        width: '100%',
    }

    const youtubeReady = (event) => {
        player.current = event.target;
    }    
    
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{title}</title>
                <meta 
                    name='description'
                    content={videoDescription.videoDescription}
                />
                <meta 
                    property='og:image' 
                    content={OgImage} 
                />
                <link rel="shortcut icon" href={Favicon} />

            </Helmet>
            <Header />
            
            <Flex position='relative'  w='100%' paddingBttom  backgroundImage={`url(${coverArt.file.url})`} backgroundPosition='center' backgroundSize='cover' >
                
                <Flex justifyContent='center'   w='100%'   fontFamily='Oswald'  color='#000' backgroundImage='linear-gradient(0deg, rgba(255,255,255,1) 69%, rgba(255,255,255,0) 85%)'>
                    
                    <Box w={['95%','95%','75%','75%']} marginTop='20vh'>
                        <Button pos='absolute' top='25px ' fontWeight='normal' textTransform='uppercase' as={GatsbyLink} to='../../' background='lightgrey'>Back to Videos</Button>
                        <Text as='h1' fontSize='2.5rem'>{title}</Text>
                        <Divider borderColor='#777' />
                        
                        <Text as='p'>
                            {videoType} 
                            {releaseYear && ` | Release Date: ${releaseYear }  `} 
                            {directors && ` | Directed By: ${directors.map(director => director).join(', ')}`}
                        </Text>
                       
                        
            <Divider borderColor='#777' marginBottom='10px' />
                        <Box w={['100%','100%','100%','75%']} float='left' paddingTop='8px' >
                            <AspectRatio ratio={16 / 9} >
                                <YouTube videoId={youtubeId} opts={opts} onReady={youtubeReady}  />
                            </AspectRatio>
                            <Text marginBottom='25px' marginTop='25px'  as='p'  >
                                {videoDescription.videoDescription}
                            </Text>
                            
                            <List color='#666'>
                                {artDirector && <ListItem p='5px' borderBottom='solid 1px #e9e9e9'>Art Direction: {artDirector.map(director => director).join(', ')}</ListItem>}
                                {executiveProducers && <ListItem p='5px' borderBottom='solid 1px #e9e9e9'>Executive Producer: {executiveProducers.map(producer => producer).join(', ')}</ListItem>}
                                {stillPhotography && <ListItem p='5px' borderBottom='solid 1px #e9e9e9'>Still Photography: {stillPhotography.map(photographer => photographer).join(', ')}</ListItem>}
                                {filmers && <ListItem p='5px' borderBottom='solid 1px #e9e9e9'>Filmed By: {filmers.map(filmer => filmer).join(', ')}</ListItem>}
                                {music && <ListItem p='5px' borderBottom='solid 1px #e9e9e9'>Music: {music.map(artist => artist).join(', ')}</ListItem>}
                            </List>
                        </Box>
                        <Box paddingLeft={['0px','0px','0px','25px']} w={['100%','100%','100%','25%']} float='right'>
                            <Text as='h2' color='#666' fontSize='1.2rem' borderBottom='solid 1px #e9e9e9'>
                                Chapters:
                            </Text>
                            {chapters  
                                ?<List >
                                    {chapters.map((chapter, index) => {
                                        const chapterArr = chapter.split(' - ');
                                        const chapterName = chapterArr[0];
                                        const chapterTimeStamp = chapterArr[1];
                                        const chapterTime = chapterArr[1].split(':');
                                        const chapterMins = parseInt(chapterTime[0]);
                                        const chapterSecs = parseInt(chapterTime[1]);
                                        //get time stamp in seconds
                                        const timeInSecs = (chapterMins * 60) + chapterSecs ;
                                        
                                        return (
                                            <ListItem cursor='pointer' className='timeStamp'  key={index} p={['0px','0px','5px','5px']} borderBottom='solid 1px #e9e9e9'>
                                                <Link textTransform='capitalize' pos='relative' as='button' _focus={{ boxShadow: 'none' }}  onClick={() => {
                                                    if(player.current){
                                                        player.current.seekTo(timeInSecs);
                                                    }
                                                }} display='inline-flex' boxSize='full'>
                                                    {chapterName} <Box pos='absolute' right='0px' color='#999' top='0px'>{chapterTimeStamp}</Box>
                                                </Link>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                : <Text>No Chapters </Text>
                            }
                        </Box>
                        
                        
                    </Box>
                </Flex>
                
            </Flex>
            <Flex display='inline-flex' justifyContent='center' w='100%' fontFamily='Oswald' marginTop='25px' paddingBottom='25px'>
                
                <Box w={['95%','95%','75%','75%']} >
                    <Text as='h2' marginBottom='5px' fontSize='1.4rem'>You May Also Like:</Text>
                    <Videos />
                </Box>
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