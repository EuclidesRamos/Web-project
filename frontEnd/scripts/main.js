let $main = document.querySelector("main");

function home() {
    console.log("2");
    $main.innerHTML = templateHome.innerHTML;

    let buttonLogin = document.querySelector("#login");
    buttonLogin.addEventListener('click', login);
}

function login() {
    $main.innerHTML = templateLogin.innerHTML;
}

(async function init() {

    await Promise.all([fetchTemplates()]);

    let hash = location.hash;
    console.log(templateHome.innerHTML);

    if (["", "#"].includes(hash)) {
        home();
    } else if (["#/login"].includes(hash)) {
        login();
    } else if (["#/register"].includes(hash)) {
        register();
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