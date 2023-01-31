const formularioLogin = document.querySelector("[data-login]");
let nomeAutor = "";



formularioLogin.addEventListener("submit", (evento)=>{
    evento.preventDefault();   

    const autor = evento.target.elements["autor"];
    nomeAutor = autor.value;
    
    autor.value = "";

    window.location.replace('../index.html')
})
