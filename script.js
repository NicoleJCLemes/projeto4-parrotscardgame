let cartas = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");

function quantidadeCartas() {
    while ((cartas % 2 !== 0) || (4 > cartas) || (cartas > 14) || (cartas === 0)) {
        cartas = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
    }
}

quantidadeCartas();
