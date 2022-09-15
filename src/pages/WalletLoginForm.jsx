import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import {useNavigate} from "react-router-dom";
import {passwordLessSignIn} from "../repository/user";

function WalletLoginForm() {
    const [email, setEmail] = React.useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sign = await passwordLessSignIn({email})

        const url = window.location.href;
        const queryString = url.split('?')[1];

        navigate('/confirmation-code', {state: {data: sign, encodedData: queryString}});
    };


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to Cloud Wallet</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to see all your <Link color={'blue.400'}>Certificate</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    id='email'
                                    autoComplete={"off"}
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type={'submit'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Log In
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

export default WalletLoginForm;