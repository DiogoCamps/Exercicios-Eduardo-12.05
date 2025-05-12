
function configurar() {
    let botaoExecutar = document.getElementById('executarBtn');
    if (botaoExecutar instanceof HTMLButtonElement)
        botaoExecutar.addEventListener('click', verificarNome)
}

function verificarNome() {
    let nomeEntrada = document.getElementById('entradaNome');
    if (nomeEntrada instanceof HTMLInputElement) {
        let nomeUsuario = nomeEntrada.value;
        let expressaoRegular = /^[a-z-A-Z-ZÀ-ÿ-' ']+$/;
        if(expressaoRegular.test(nomeUsuario)) {
            exibirMensagem("Nome válido: " + nomeUsuario, "green");
        }else {
            exibirMensagem("Nome Inválido.Insira sem carateres especiais.", "red");
        }
    }
}

function exibirMensagem(conteudo, cor){
    let dados = document.getElementById('resultado');

    if(dados instanceof HTMLParagraphElement){
        dados.textContent = conteudo;
        dados.style.color = cor;
    }
}

document.addEventListener('DOMContentLoaded', configurar);