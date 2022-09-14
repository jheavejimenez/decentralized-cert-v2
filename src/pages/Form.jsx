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
import {useNavigate} from "react-router-dom";
import React from "react";
import {UserContext} from "../context/UserContext";
import {createCertificate} from "../repository/certificate";
import {passwordLessSignIn} from "../repository/user";

function Form() {
    const {user} = React.useContext(UserContext);
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [course, setCourse] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const sign = await passwordLessSignIn({email})
        await createCertificate(
            user.id,
            firstName,
            lastName,
            email,
            course,
        )
        navigate('/confirmation-code', {state: {data: sign}});
        // navigate('/');
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'2xl'}>Create Your Decentralized Certification</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel htmlFor='first-name'>First name</FormLabel>
                                <Input
                                    id='first-name'
                                    placeholder='First name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    id='last-name'
                                    placeholder='Last name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <FormLabel>Email Address</FormLabel>
                                <Input
                                    id='email'
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormLabel>Course</FormLabel>
                                <Input
                                    id='course'
                                    placeholder='Course'
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
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
                                    Request Certificate
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Form;
