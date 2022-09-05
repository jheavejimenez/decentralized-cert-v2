import React from "react";
import {Heading, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import CustomButton from "./Button";

function CertificateCardHolder({firstName, lastName, course}) {
    return (
        <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Stack align={'right'} spacing={2}>
                <Heading
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}>
                    Congratulations
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {`Name: ${firstName} ${lastName}`}
                </Text>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {`Course: ${course}`}
                </Text>
            </Stack>
            <CustomButton title={'Submit Another Application'} path={'/'} />
        </Stack>
    )
}

export default CertificateCardHolder;
