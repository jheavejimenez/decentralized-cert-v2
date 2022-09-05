import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavBar";
import {UserContext} from "./context/UserContext";
import {DidContext} from "./context/DidContext";

function App() {
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
    });
    const [did, setDid] = useState({did: ''});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <DidContext.Provider value={{did, setDid}}>
                <div>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path={"/sign-in"} element={<SignInForm/>}/>
                        <Route path={"/request-certificate"} element={<Form/>}/>
                        <Route path={"confirmation-code"} element={<OTP/>}/>
                        <Route path={"/certificates"} element={<Certificate/>}/>
                        <Route path={"/admin"} element={<Approver/>}/>
                    </Routes>
                </div>
            </DidContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
