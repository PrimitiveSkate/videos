import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import { Flex, Button, Image, Link } from "@chakra-ui/react";
import Logo from '../assets/primitive_video.svg';

const Header = () =>{
    return (
        <>
            <Flex h='125px' fontFamily='Oswald' borderBottom='1px solid #999'>
                <Flex bg='rgba(255,255,255,0.7)' alignItems='center' justifyContent='center' flexDir='column' w="100%" >
                    <Link href='/' title="Home">
                        <Image src={Logo} w='200px' alignItems='center' />
                    </Link>
                    
                </Flex>
            </Flex>
        </>
    )
}

export default Header;