import React from "react";
import {Heading, Stack, useColorModeValue} from "@chakra-ui/react";
import CustomButton from "./Button";

function Card() {
    return (
        <Stack
            bg={useColorModeValue('gray.100', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Stack align={'center'} spacing={2}>
                <Heading
                    mb={'15px'}
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}>
                    Please wait for the certificate to approve
                </Heading>
                <CustomButton title={'Go Back To HomePage'} path={'/'}/>
            </Stack>
        </Stack>
    )

}

export default Card;
