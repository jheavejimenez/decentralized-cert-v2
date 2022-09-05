import {ChakraProvider} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
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
        </ChakraProvider>
    );
}

export default App;
