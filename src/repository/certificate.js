import axios from "axios";
import {server} from "./apiConfig";

export async function getApplications(id) {
    if (!id) {
        return [{
            "_id": "123",
            "error": "No Applications",
        }];
    }
    const response = await axios.get(`${server.url}/api/certificates/dashboard/${id}`);
    return response.data;
}

export async function getApprovedCertificate() {
    const response = await axios.get(`${server.url}/api/certificates`);
    return response.data;
}

export async function patchConfirmationCode(
    id,
    token,
    confirmationCode
) {
    const response = await axios.put(`${server.url}/api/certificates/confirm-signup/${id}`, {token, confirmationCode});
    return response.data;
}

export async function createCertificate(
    user,
    firstName,
    lastName,
    email,
    course
) {
    const data = {user, firstName, lastName, email, course, isApprove: false, claimId: ""};

    return await axios.post(`${server.url}/api/certificates`, data);
}
