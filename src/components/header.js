import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import { Flex, Button, Image, Link } from "@chakra-ui/react";
import Logo from '../assets/primitive_video.svg';

const Header = () =>{
    return (
        <>
            <Flex minHeight='100px' fontFamily='Oswald' borderBottom='1px solid #999'>
                <Flex bg='rgba(255,255,255,0.7)' alignItems='center' justifyContent='center' flexDir='column' w="100%" paddingBottom={['25px','25px', '0', '0']} >
                    <Link href='/' title="Home" marginBottom={['0','0','15px','15px']}>
                        <Image src={Logo} w='200px' alignItems='center' />
                    </Link>
                    <Button pos={['relative','relative','absolute','absolute']} target='_blank' colorScheme='yellow' top={['10px','10px','auto','auto']} right={['0','0','20px','20px']} fontSize='14px' textTransform='uppercase' fontWeight='normal'  as={GatsbyLink} to='https://primitiveskate.com'>
                        Shop Primitiveskate.com
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default Header;