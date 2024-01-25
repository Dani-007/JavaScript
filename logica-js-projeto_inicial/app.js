alert('Boas vindas ao jogo do número secreto');

let dificuldade = prompt('Escolha a dificuldade\n 1 - Fácil\n 2 - Médio\n 3 - Difícil');
let limite;
let chute = -1;
let contador = 1

while (dificuldade != 1 && dificuldade != 2 && dificuldade != 3) {
    dificuldade= prompt('Escolha a dificuldade\n 1 - Fácil\n 2 - Médio\n 3 - Difícil');
} 

if (dificuldade == 1) {
    limite = 10;
}
else if (dificuldade == 2) {
    limite = 100;
}
else if (dificuldade == 3) {
    limite = 1000;
}

numeroSecreto = parseInt(Math.random() * (limite + 1));
console.log(numeroSecreto);

while (chute != numeroSecreto){
    while (chute < 0 || chute > limite){
        chute =  prompt(contador + '° Tentativa. Digite um número de 0 a ' + limite);
        if (chute < 0 || chute > limite){
            alert('Número inválido');
        }
    }
    
    if (chute == numeroSecreto) {
        alert('Você acertou! Com ' + contador + ' tentativas');
        break;
    }
    else if (chute > numeroSecreto) {
        alert('O número secreto é menor que ' + chute);
    }
    else if (chute < numeroSecreto) {
        alert('O número secreto é maior que ' + chute);
    }

    chute = -1;
    contador++;
}