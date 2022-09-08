import axios from "axios";
import {server} from "./apiConfig";

export async function getSumittedApplications() {
    const response = await axios.get(`${server.url}/api/approver`);
    return response.data;
}

export async function sendEmailApproved(email, name) {
    const data = {email, name}
    const response = await axios.post(`${server.url}/api/approver`, data);
    return response.data;
}

export async function approveApplication(
    id,
    firstName,
    lastName,
    email,
    course,
    isApprove,
    unsignedCredentials
) {
    const data = {firstName, lastName, email, course, isApprove, unsignedCredentials};
    console.log(data);

    return await axios.put(`${server.url}/api/approver/${id}`, data);
}

export async function buildVC(data) {
    const unsignedVC = await axios.post("https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned", data, {
        headers: {
            "Content-Type": "application/json",
            "Api-Key": `${process.env.REACT_APP_API_KEY_HASH}`
        }
    });
    return unsignedVC.data.unsignedCredential;
}
