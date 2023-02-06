
async function requestLength(){
    try{
        let tamanhoDaLista = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let tamanhoDaListaConvertido = await tamanhoDaLista.json();
        tamanhoDaListaConvertido.forEach(element => {
            postarTeste(element);
        });
    }catch(erro){
        console.log(erro);
    }
}

requestLength();


function postarTeste(element){
    let titulo = element.title;    
    let corpo = element.body;

    postagens.innerHTML += `
        <section class="postagem flex__container" data-postagem>
            <div class="postagem-cabecalho grid__container">
                <img src="img/doguinho.jpg" class="postagem-img">
                <div class="grid__container postagem-cabecalho__infos">
                    <h2 class="postagem-autor">Teste Caramelo</h2>
                    <h3 class="postgem-titulo" data-postagem-titulo>${titulo}</h3>
                </div>
            </div>
            <div class="postagem-corpo" >
                <p data-postagem-texto>${corpo}</p>
            </div>
        </section>   
    `
}