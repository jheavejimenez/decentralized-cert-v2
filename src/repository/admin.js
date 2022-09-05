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
