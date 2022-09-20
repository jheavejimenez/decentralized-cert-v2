import React from "react";
import { Button, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";

function CertificateCardHolder({ firstName, lastName, course, certificateData }) {
    const verifyCertificate = async (certificateData) => {
        const response = await axios.post("https://affinity-verifier.prod.affinity-project.org/api/v1/verifier/verify-vcs",
            { verifiableCredentials: [certificateData] },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": process.env.REACT_APP_API_KEY_HASH,
                }
            }
        );

        alert(response.data.isValid)
    }

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
            <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    flex={'1 0 auto'}
                    _hover={{ bg: 'blue.500' }}
                    _focus={{ bg: 'blue.500' }}
                    onClick={() => verifyCertificate(certificateData)}
                >
                    Verify Certificate
                </Button>
            </Stack>
        </Stack>
    )
}

export default CertificateCardHolder;
