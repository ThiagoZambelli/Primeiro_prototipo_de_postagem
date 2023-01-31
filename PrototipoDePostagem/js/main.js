
const form = document.getElementById("formulario");

const postagens = document.getElementById("postagens")
const autorDeTeste = "nomeAutor";
const imagemDoguinho = "img/doguinho.jpg"






form.addEventListener("submit", (evento)=>{
    evento.preventDefault();    
    
    const titulo = evento.target.elements["titulo"];
    const texto =  evento.target.elements["texto"]; 
    criarPostagem(titulo.value, texto.value);
      
    texto.value = "";
    titulo.value = "";    
})


function criarPostagem(tituloPostar, conteudo){

    //criação da section
    const novaPostagem = document.createElement('section');
    novaPostagem.classList.add("postagem", "flex__container");
    novaPostagem.setAttribute("data-postagem","")    
    
    
    
    //criação da div cabeçalho
    const novaPostagemDivCabecalho = document.createElement('div');
    novaPostagemDivCabecalho.classList.add("postagem-cabecalho", "grid__container");

    //criação imgem
    const fotoAutor = document.createElement('img');
    fotoAutor.classList.add("postagem-img");
    fotoAutor.setAttribute("src", imagemDoguinho)

    //criação da div cabeçalho titulo e autor
    const novaPostagemTituloAutor = document.createElement('div');
    novaPostagemTituloAutor.classList.add("grid__container", "postagem-cabecalho__infos");

    //criação do autor
    const autor = document.createElement('h2');
    autor.classList.add("postagem-autor")
    autor.textContent = "Autor da Postagem: " + autorDeTeste;  

    //criação do titulo
    const titulo = document.createElement('h3');
    titulo.classList.add("postgem-titulo")
    titulo.setAttribute("data-postagem-titulo","")
    titulo.textContent = tituloPostar;

    //Colocando autor e titulo no cabeçalho
    novaPostagemTituloAutor.appendChild(autor);
    novaPostagemTituloAutor.appendChild(titulo);
    //console.log(novaPostagemCabecalho)

    novaPostagemDivCabecalho.appendChild(fotoAutor);
    novaPostagemDivCabecalho.appendChild(novaPostagemTituloAutor);

    //criação do corpo do texto
    const novaPostagemTexto = document.createElement('div');
    novaPostagemTexto.classList.add("postagem-corpo");

    const novaPostagemCorpoTexto = document.createElement('p');
    novaPostagemCorpoTexto.setAttribute("data-postagem-texto","")
    novaPostagemCorpoTexto.textContent = conteudo;

    novaPostagemTexto.appendChild(novaPostagemCorpoTexto);

    //Montando a postagem
    novaPostagem.appendChild(novaPostagemDivCabecalho);
    novaPostagem.appendChild(novaPostagemTexto);

    //postando nas postagens da pagina
    postagens.appendChild(novaPostagem);

}

