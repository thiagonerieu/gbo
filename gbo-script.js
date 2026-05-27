// JS Formulaire
const loginForm = document.querySelector('.form');
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Formulaire soumis.'); // Orientação JS
});

const inputEmail = document.querySelector('#login-email');
const emailRegexp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
inputEmail.addEventListener('keyup',()=>{
    console.log("C'est ce qui est indiqué dans le champ « e-mail »."); // Orientação JS
    if(!emailRegexp.test(inputEmail.value)){
        inputEmail.style.backgroundColor = "#ff7b72";
    }
    else{
        inputEmail.style.backgroundColor = "#818CF8";
    }            
});

const showPassword = document.querySelector("#icon-password");
showPassword.addEventListener('click',()=>{
    let inputPassword = document.querySelector("#login-password");
    console.log("Lorsque vous cliquez dessus, le mot de passe s'affiche ou se masque."); // Orientação JS
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        showPassword.style.backgroundImage = "url('./icons/icon-eye-visible.svg')";
    } else {
        inputPassword.type = "password";
        showPassword.style.backgroundImage = "url('./icons/icon-eye-hidden.svg";
    }
});