import React from 'react';

import { Flex} from "@chakra-ui/react";
import {Helmet} from 'react-helmet';
import Header from '../components/header';
import Videos from '../components/videos';

export default function Index() {
    
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Primitive Video Archive</title>
                <meta 
                    name='description'
                    content='An archive of Primitive videos throughout the years!'
                />
            </Helmet>
            <Header />
            <Flex width="100%" padding="0px 20px" marginTop="25px" > 
                <Videos />
            </Flex>
            
        </>
    );
}

