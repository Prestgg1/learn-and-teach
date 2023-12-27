import { BsCircleFill } from "react-icons/bs";

function Register() {
        const submit= (e)=>{
            e.preventDefault()}
    return (
        <>
            <form onSubmit={submit} action="" id="register">
                <h1>Hesab Yaradın</h1>
                <input type="email" placeholder="E-poçt" name="" id="register" />
                <input placeholder="Şifrə" type="password" name="" id="register" />
                <input placeholder="Şifrənizi yenidən daxil edin" type="password" name="" id="register" />

                <div className="flex"><div className="loading"><BsCircleFill fill="white"/><BsCircleFill /><BsCircleFill />
</div>  <input className="dark" type="submit" value="Növbəti" onClick={()=>{}}/></div>    
            </form>
        </>
    );
}

export { Register };
