export const schoolSchema = (firstName, lastName, course, did) => {
    return {
        "jsonLdContextUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.jsonld",
        "jsonSchemaUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.json",
        "typeName": "xampleSchema2",
        "credentialSubject": {
            "data": {
                "firstname": `${firstName}`,
                "lastname": `${lastName}`,
                "course": `${course}`
            }
        },
        "holderDid": did || ''
    }
}
