const btn = document.querySelector ("#btnLogin");
const inputUuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
    let usuario = localStorage.getItem("uuario");
    if(usuaro){
        window.GeolocationPosition.href = "http:www.uol.com.br";
    }
})();

btn,onclic = (e) =>{
    e.preventDefault();
    let usuario = inputUuario.value;
    let senha = inputSenha.value;
    if(!usuario && !senha){
        inputUuario.focus();
        return;
    }
    if(usuario === "mari"){
        if(senha ==  "123"){
            localStorage.setItem("usuario",usuario);
            window.location.href = "http:www.uol.com.br";
        }else{
            inputUuario.focus();
        }
    }
}