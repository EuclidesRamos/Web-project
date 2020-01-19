function fetchLogin() {
    let email = document.querySelector("#inputEmail").value;
    let senha = document.querySelector("#inputPassword").value;

    fetch(URL + "/login",
    {
        'method':'POST',
        'body':`{"email":"${email}", "senha":"${senha}"`,
        'headers':{'Content-Type':'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login não realizando.");
        } else {
            return response.json();
        }
    })
    .then(dados => {
        sessionStorage.setItem('idToken', dados.token);

    })
    .catch(error => {
        alert(error);
    })
}

function fetchRegister() {
    let nome = document.querySelector("#inputNome").value;
    let sobrenome = document.querySelector("#inputSobrenome").value;
    let email = document.querySelector("#inputEmail").value;
    let senha = document.querySelector("#inputPassword").value;

    fetch(URL + "/register", 
    {
        'method':'POST',
        'body':`{"nome":"${nome}", "sobrenome":"${sobrenome}", "email":"${email}", "senha":"${senha}"}`,
        'headers':{'Content-Type':'application/json'}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Cadastro não realizado.");
        } else {
            return response.json();
        }
    })
    .then(dados => {
        alert("Cadastro realizado!");
        login();
    })
    .catch(error => {
        alert(error);
    })
}