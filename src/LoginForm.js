import './LoginForm.css';

function ValidateEmail(value) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) { return true }
    return false
}

async function submit() {
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let funfact = document.querySelector(".funfact")

    if (!ValidateEmail(email.value)) { alert("Invalid email!") } 
    else if (!name.value) { alert("No name was entered!") }
    else if (!funfact.value) { alert("No fun fact was entered!") }
    else {  
        let response = await fetch(`https://hack-tech-app-endpoint.herokuapp.com/test?name=${name.value}&email=${email.value}&funfact=${funfact.value}`)
        response = await response.json()
        console.log(response)
        alert("Your info was submitted!")
        name.value = ""
        email.value = ""
        funfact.value = ""
    }
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