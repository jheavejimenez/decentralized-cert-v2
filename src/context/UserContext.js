import {createContext} from "react";


export const UserContext = createContext({
    user: {
        id: null,
        username: ''
    },
    setUser: (user) => {}
});
