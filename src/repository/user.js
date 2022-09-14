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

