import '../assets/scss/Form.css'
function Login() {
    const submit= (e)=>{
        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={submit} action="" id="login">
        <h1>Hesaba giriş</h1>
        <input type="email" placeholder="E-poçt" name="" id="login" />
        <input placeholder="Şifrə" type="password" name="" id="login" />
        <input className="dark" type="submit" value="Daxil ol" />
        </form> </>
);
}

export { Login };
