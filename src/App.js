import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavBar";
import {UserContext} from "./context/UserContext";
import {DidContext} from "./context/DidContext";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Certificate from "./pages/Certificate";
import OTP from "./pages/OTP";
import Form from "./pages/Form";
import SigninForm from "./pages/SigninForm";
import WalletLoginForm from "./pages/WalletLoginForm";


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
                        <Route path={"/sign-in"} element={<SigninForm/>}/>
                        <Route path={"/request-certificate"} element={<Form/>}/>
                        <Route path={"/confirmation-code"} element={<OTP/>}/>
                        <Route path={"/wallet/login"} element={<WalletLoginForm/>}/>
                        <Route path={"/certificates"} element={<Certificate/>}/>
                        <Route path={"/admin"} element={<Admin/>}/>
                    </Routes>
                </div>
            </DidContext.Provider>
        </UserContext.Provider>
    );
}


export default App;
