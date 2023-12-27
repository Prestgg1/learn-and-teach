import { useEffect, useState } from "react";
import Logo from "../assets/img/image.png";
import { MainContext,useContext } from "../Context";
function Nav() {
    const {login,setLogin,register,setRegister}= useContext(MainContext);
    useEffect(()=>{console.log(register)},[register])
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={Logo} alt="" />
                        <h1>Öyrən və Öyrət</h1>
                    </a>
                </div>
                {!register ? (
                    <button
                        onClick={() => {
                            setRegister(true);
                            setLogin(false);
                        }}
                        className="light"
                    >
                        Hesab Yarat
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            setRegister(false);
                            setLogin(true);
                        }}
                        className="light"
                    >
                        Daxil Ol
                    </button>
                )}
            </nav>
        </header>
    );
}

export { Nav };
