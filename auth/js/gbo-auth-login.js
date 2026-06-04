// JS Formulaire
const loginForm = document.querySelector('.form');
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Login : Formulaire soumis.');
    // Mostra uma orientação JS indicando que o formulário foi enviado, sem recarregar a página, usando event.preventDefault() para evitar o comportamento padrão de envio do formulário.
});

const inputEmail = document.querySelector('#login-email');
const emailRegexp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
inputEmail.addEventListener('keyup',()=>{
    console.log("Login :C'est ce qui est indiqué dans le champ « e-mail ».");
    // Mostra uma orientação JS sobre o campo de e-mail, se o formato do e-mail é válido ou não, mudando a cor de fundo do campo para o vermelho da paleta quando não válido e azul da paleta quando válido.
    if(!emailRegexp.test(inputEmail.value)){
        inputEmail.style.backgroundColor = "#ff7b72";
        inputEmail.style.color = "#1E293B";
        }
    else{
        inputEmail.style.backgroundColor = "#818CF8";
        inputEmail.style.color = "#E2E8F0";
    }            
});

const showPassword = document.querySelector(".form-icon-eye");
showPassword.addEventListener('click',()=>{
    let inputPassword = document.querySelector("#login-password");
    console.log("Login : Lorsque vous cliquez dessus, le mot de passe s'affiche ou se masque.");
    // Mostra uma orientação JS icon-eye visible e hidden, indicando que o ícone de olho é clicável para mostrar ou ocultar a senha, alternando o tipo do campo de senha entre "password" e "text" e mudando a imagem do ícone de olho para refletir o estado atual (visível ou oculto).
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        showPassword.style.backgroundImage = "url('../shared/icons/icon-eye-visible.svg')";
    } else {
        inputPassword.type = "password";
        showPassword.style.backgroundImage = "url('../shared/icons/icon-eye-hidden.svg')";
    }
});