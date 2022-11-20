import './LoginForm.css';

function ValidateEmail(value) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) { return true }
    return false
}

function submit() {
    let name = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let funfact = document.querySelector(".funfact").value

    if (ValidateEmail(email)) { console.log([name, email, funfact]) }
    else { console.log('bruh') }
}

function LoginForm() {
  return (
    <div className="login-form">
        <h1>Hack UCI Application</h1>
        <div className='inputs'>
            <h3 className='input-title'>Name</h3>
            <input type="text" placeholder="Name" className="name"/>
            <h3 className='input-title'>Email</h3>
            <input type="text" placeholder="Email" className="email"/>
            <h3 className='input-title'>Fun Fact</h3>
            <textarea type="text" placeholder="Fun Fact" className="funfact"/>
        </div>
        <div className='button-container'>
            <button className='submit' onClick={submit}>Submit</button>
        </div>
    </div>
  );
}

export default LoginForm;