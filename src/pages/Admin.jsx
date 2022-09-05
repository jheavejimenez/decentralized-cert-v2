import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
// import {getSumittedApplications, sendEmailApproved} from "../utils/approver";
import {DidContext} from "../context/DidContext";

function Admin() {
    const [certs, setCerts] = useState([]);
    const {did} = React.useContext(DidContext);

    const handleApprove = async (cert) => {
        // let data = schoolSchema(cert.firstName, cert.lastName, cert.course, did);
        // console.log(data)
        // await axios.post("https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned", data, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Api-Key": `${process.env.REACT_APP_API_KEY_HASH}`
        //     }
        //
        // }).then(res => {
        //     async function buildUsignVc() {
        //         const isApprove = true;
        //         const unsignedVC = res.data.unsignedCredential;
        //
        //         await approveApplication(
        //             cert._id,
        //             cert.firstName,
        //             cert.lastName,
        //             cert.email,
        //             cert.course,
        //             isApprove,
        //             unsignedVC
        //         )
        //     }
        //
        //     buildUsignVc();
        // })
        console.log('click')
        // await sendEmailApproved(
        //     cert.email,
        //     cert.firstName
        // )
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <TableContainer display={'block'}>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Course</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {certs.map((cert) => (
                            <Tr key={cert._id}>
                                <Td>{cert.firstName}</Td>
                                <Td>{cert.lastName}</Td>
                                <Td>{cert.course}</Td>
                                <Td>
                                    <Button
                                        onClick={() => handleApprove(cert)}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Approve
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}

export default Admin;
