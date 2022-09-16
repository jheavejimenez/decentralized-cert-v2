import axios from "axios";
import {server} from "./apiConfig";

export async function createUser(username) {
    const data = {username};
    const response = await axios.post(`${server.url}/api/users`, data);
    return response.data = {
        id: response.data._id,
        username: response.data.username,

    };
}

export async function getUserDid(id) {
    const response = await axios.get(`${server.url}/api/users/get-user-did/${id}`);
    return response.data;
}

export async function passwordLessSignIn(data) {
    const signIn = await axios.post("https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/sign-in-passwordless",
        {"username": data.email}, {
            headers: {
                "Content-Type": "application/json",
                "Api-Key": process.env.REACT_APP_API_KEY_HASH,
            }
        })
    return signIn.data
}

export async function loginWithOTP(
    token,
    confirmationCode,
    encodedData
) {
    const response = await axios.post(`${server.url}/api/certificates//login/otp`, {token, confirmationCode, encodedData});
    return response.data;
}
