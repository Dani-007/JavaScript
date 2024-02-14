let listaNumeroEscolhido = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemtentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        exibirTexto('h1', 'Você errou!');
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor que ' + chute);
        }
        else{
            exibirTexto('p', 'O número secreto é maior que ' + chute);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1); // +1 para incluir o número 10 no intervalo.
    let limite = 3;

    if (listaNumeroEscolhido.length == limite){
        listaNumeroEscolhido = [];
    }

    if (listaNumeroEscolhido.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumeroEscolhido.push(numeroEscolhido);
        console.log(listaNumeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute =  document.querySelector('input'); 
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensagemInicial();
    limparCampo();
    tentativas = 1;
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();