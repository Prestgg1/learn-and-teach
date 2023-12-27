import "./assets/scss/App.css";
import {useState} from "react"
import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";
import { MainContext } from "./Context";

function App() {
    const isMobile = window.innerWidth <= 768;
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    return (
        <>
         <MainContext.Provider value={{login,setLogin,register,setRegister}}>
         {isMobile ? <Mobile/> : <Desktop/>}
        </MainContext.Provider> 
        </>

    );
}

export default App;
