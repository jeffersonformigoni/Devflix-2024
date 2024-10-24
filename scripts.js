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

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")

botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
    video.muted = false
}