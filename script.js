let cartas = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
let qtdCartas = []

function quantidadeCartas() {
    while ((cartas % 2 !== 0) || (4 > cartas) || (cartas > 14) || (cartas === 0)) {
        cartas = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
    }
}

quantidadeCartas();


function comparador() { 
	return Math.random() - 0.5; 
}

function aparecerCartas() {
    for(let i = 0; i < cartas; i++) {
        qtdCartas.push(`arquivos/gif${i}.gif`);
        qtdCartas.sort(comparador); 
    }

    for (let j = 0; j < cartas; j++) {
        const adicionar = document.querySelector("main");
        adicionar.innerHTML = adicionar.innerHTML + `
        <div class="total-card" onclick="girarCarta(this)">
            <div class="front card">
                <img src="arquivos/front.png" alt="papagaio">
            </div>
            <div class="back card">
                <img src="${qtdCartas[j]}" alt="gif papagaio">
            </div>
        </div>
        `
    }
}

aparecerCartas();

function girarCarta(cardEscolhido) {
    cardEscolhido.classList.toggle("flip");
}



