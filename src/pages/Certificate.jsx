import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import {Container, SimpleGrid} from '@chakra-ui/react';
import Card from "../components/Card";
import CertificateCardHolder from "../components/CertificateCardHolder";
import {getApprovedCertificate} from "../repository/certificate";

function Certificate() {
    const [certs, setCerts] = useState([]);
    const {auth} = useContext(AuthContext);
    const accessToken = auth.accessToken;

    useEffect(() => {
        async function fetchApprovedCerts(accessToken) {
            const res = await getApprovedCertificate(accessToken)
            setCerts(res);
        }
        fetchApprovedCerts(accessToken)
        let interval = setInterval(async () => {
            fetchApprovedCerts(accessToken)
        }, 60000);

        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };

    }, []);
    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            {
                certs.length === 0 ? (<Card/>) : (
                    <SimpleGrid columns={3} spacing={5}>
                        {certs.map((cert, index) => (
                            <CertificateCardHolder
                                key={index}
                                firstName={cert.credentialSubject.data.firstname}
                                lastName={cert.credentialSubject.data.lastname}
                                course={cert.credentialSubject.data.course}
                                certificateData={cert}
                            />
                        ))}
                    </SimpleGrid>
                )
            }
        </Container>
    );
}

export default Certificate;
