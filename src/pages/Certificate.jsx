import React, {useEffect, useState} from "react";

import {Container, SimpleGrid} from '@chakra-ui/react';
import Card from "../components/Card";
import CertificateCardHolder from "../components/CertificateCardHolder";
import {getApprovedCertificate} from "../utils/certifcate";

function Certificate() {
    const [certs, setCerts] = useState([]);
    useEffect(() => {
        async function fetchApprovedCerts() {
            const res = await getApprovedCertificate()
            setCerts(res);
        }

        fetchApprovedCerts()
        let interval = setInterval(async () => {
            fetchApprovedCerts()
        }, 10000);

        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };

    }, []);
    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            {
                certs.length === 0 ? (<Card/>) : (
                    <SimpleGrid columns={3} spacing={5}>
                        {certs.map((cert) => (
                            <CertificateCardHolder
                                key={cert._id}
                                firstName={cert.firstName}
                                lastName={cert.lastName}
                                course={cert.course}
                            />
                        ))}
                    </SimpleGrid>
                )
            }
        </Container>
    );
}

export default Certificate;
