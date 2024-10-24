/*
    JavaScript (E qualquer linguagem)
        - Variável
    Um pedacinho da memória do computador,
    que eu posso guardar o que eu quiser



    - Funções (NÃO é uma função MATEMÁTICA)
    - Pedacinho de código que só executa quando é chamado

    Botão -> For clicado -> Chamar a minha Função -> Ligar o SOM
    Document = HTML
    querySelector (Selecionar ou pegar um item do HTML)
    addEventListener - Sua vizinha fofoqueira (Ouvindo alguém )
*/

let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");


// Ligar e desligar o SOM com um único click.
botaoSom.addEventListener("click", toggleSom);

function toggleSom() {
    video.muted = !video.muted; // Alterna o estado do SOM.
}

// Mostrar o MODAL.
botao.addEventListener("click", mostrarModal);

function mostrarModal() {
    modal.style.display = "block"
}

// Esconde o MODAL.
modal.addEventListener("click", esconderModal);

function esconderModal() {
    modal.style.display = "none"
}