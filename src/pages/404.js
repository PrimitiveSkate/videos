import React from "react";
import { Flex, Text,Link, Image } from "@chakra-ui/react";
import {Helmet} from 'react-helmet';
import Tape from '../assets/damagedTape.jpg';

const NotFound = () => {
  return (
    <>
      <Helmet>
            <meta charSet='utf-8' />
            <title>404 - Primitive Video Archive</title>
            <meta 
                name='description'
                content='An archive of Primitive videos throughout the years!'
            />
        </Helmet>
        <Flex>
            <Flex bg='#fff' alignItems='center' flexDir='column' w="100%" h='100vh' alignItems='center' justifyContent='center'>
                <Text fontFamily='Oswald, sans-serif' textTransform='uppercase' as='h1' fontSize='2rem' paddingBottom='20px'>Page not found!</Text>
                <Image src={Tape} w='300px' alignItems='center' marginBottom="25px"/>
                
                <Link href="./" fontFamily='Oswald' textTransform='uppercase'>Take me home</Link>
            </Flex>
        </Flex>
    </>
  )
}
export default NotFound;