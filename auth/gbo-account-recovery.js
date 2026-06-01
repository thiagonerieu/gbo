// JS Formulaire
const AccountRecoveryForm = document.querySelector('.form');
AccountRecoveryForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Account Recovery : Formulaire soumis.');
    // Mostra uma orientação JS indicando que o formulário foi enviado, sem recarregar a página, usando event.preventDefault() para evitar o comportamento padrão de envio do formulário.
});

const inputEmail = document.querySelector('#login-email');
const emailRegexp = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
inputEmail.addEventListener('keyup',()=>{
    console.log("Account Recovery :C'est ce qui est indiqué dans le champ « e-mail ».");
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