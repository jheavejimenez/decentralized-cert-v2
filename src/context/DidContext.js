import {createContext} from "react";

export const DidContext = createContext({
    did: "",
    setDid: (did) => {},
});
