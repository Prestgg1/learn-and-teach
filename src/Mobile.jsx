import { useContext, useState } from "react";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Login } from "./pages/Login"
import { MainContext } from "./Context";
import { Register } from "./pages/Register";


function Mobile() {
    const {login,setLogin,register,setRegister}= useContext(MainContext);
    function Auth(){
        if(login){
            return <Login/>
        }
        else if(register){
            return <Register/>
        }
        else if(login===false && register===false){
            return <button className="dark" onClick={()=>{setLogin(true);}}>Daxil Ol</button>
        }
    }
    function Detector(){
        if(login===false && register===false){
            return (<div className="div">
            <h1>Öyrən və Öyrət</h1>
            <p>platformasına xoş</p>
            <p>gəlmisiniz!</p>
            </div>)
        }
        else if(window.innerHeight <= 900){
            return null;
        }
        else{
            return (<div className="div">
            <h1>Öyrən və Öyrət</h1>
            <p>platformasına xoş</p>
            <p>gəlmisiniz!</p>
            </div>)
        }
    }
    return (
        <>
            <Nav />

            <main>
            {Detector()}
                {Auth()}
            </main>
            <Footer/>
        </>
    );
}

export { Mobile };
