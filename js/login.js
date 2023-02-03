const formularioLogin = document.querySelector("[data-login]");

formularioLogin.addEventListener("submit", (evento)=>{
    evento.preventDefault();   

    const autor = evento.target.elements["autor"];

    localStorage.setItem("autor", autor.value);
    
    
    autor.value = "";

    window.location.replace('../index.html')    
})



