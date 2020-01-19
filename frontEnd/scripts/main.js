let $main = document.querySelector("main");
const URL = "";

function home() {
    $main.innerHTML = templateHome.innerHTML;

    document.querySelector("#projeto1").addEventListener('click', projeto1);
    document.querySelector("#projeto2").addEventListener('click', projeto2);

    document.querySelector("#carousel1").addEventListener('click', register);
    document.querySelector("#carousel2").addEventListener('click', projeto3);
    document.querySelector("#carousel3").addEventListener('click', projeto3);
}

function login() {
    $main.innerHTML = templateLogin.innerHTML;

    document.querySelector("#loginSend").addEventListener('click', fetchLogin);
}

function register() {
    $main.innerHTML = templateRegister.innerHTML;

    document.querySelector("#registerSend").addEventListener('click', fetchRegister);
}

function projeto1() {
    $main.innerHTML = '<div class="pt-3">Em construção...</div>';
}

function projeto2() {
    $main.innerHTML = '<div class="pt-3">Em construção...</div>';
}

function projeto3() {
    $main.innerHTML = '<div class="pt-3">Em construção...</div>';
}

function feedback() {
    $main.innerHTML = '<div class="pt-3">Em construção...</div>';
}

(async function init() {

    await Promise.all([fetchTemplates()]);
    await configButtons();
    
    let hash = location.hash;
    
    if (["", "#"].includes(hash)) {
        home();
    } else if (["#/login"].includes(hash)) {
        login();
    } else if (["#/register"].includes(hash)) {
        register();
    } else if (["#/santos_e_soldados"].includes(hash)) {
        projeto1();
    } else if (["#/feminino"].includes(hash)) {
        projeto2();
    } else if (["#/about", "#/wedo", "#/localization"].includes(hash)) {
        location.hash = "";
        home();
    } else if (["#/feedback"].includes(hash)) {
        feedback();
    }
}());

let templateHome, templateLogin, templateRegister;
async function fetchTemplates() {
    let htmlTemplates = await (fetch('./templates.html').then(r => r.text()));
    let e = document.createElement("div");
    e.innerHTML= htmlTemplates;

    templateHome = e.querySelector("#home");
    templateLogin = e.querySelector("#login");
    templateRegister = e.querySelector("#register");
}

function configButtons() {
    let buttonLogin = document.querySelector("#login");
    buttonLogin.addEventListener('click', login);

    let buttonRegister = document.querySelector("#register");
    buttonRegister.addEventListener('click', register);
}