let cartas = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
let qtdCartas = [];
let qtdCartasEmbaralhadas = [];
let indiceCartas = [];

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
        qtdCartas.push(`arquivos/gif${i}.gif`);
        qtdCartasEmbaralhadas[i] = qtdCartas[i];
        qtdCartasEmbaralhadas.sort(comparador);
    }

    for (let j = 0; j < cartas; j++) {
        const adicionar = document.querySelector("main");
        adicionar.innerHTML = adicionar.innerHTML + `
        <div class="total-card" onclick="girarCarta(this)">
            <div class="front card">
                <img src="arquivos/front.png" alt="papagaio">
            </div>
            <div class="back card">
                <img src="${qtdCartasEmbaralhadas[j]}" alt="gif papagaio">
            </div>
        </div>
        `
    }
}

aparecerCartas();

/*function girarCarta(cardEscolhido) {
    cardEscolhido.classList.toggle("flip");
}*/

let imagem = [];
let jogadas = 0;
let primeiraCarta = 0;
let segundaCarta = 0;
// let cardVirado = null;

function girarCarta(cardEscolhido) {
    
    jogadas++;

    if (imagem.length < 2){
        cardEscolhido.classList.add("flip");
        imagem.push(cardEscolhido.querySelector(".back img"));
    }

    primeiraCarta = imagem[0];
    segundaCarta = imagem[1];

    if (imagem.length == 2) {
        console.log(segundaCarta);
        if(primeiraCarta.parentNode.innerHTML !== segundaCarta.parentNode.innerHTML){
            console.log(segundaCarta);
            console.log(primeiraCarta);
            setTimeout(removerFlip,1000);
        } else {
            imagem = [];
        }
    }

    function removerFlip() {
        imagem[0].parentNode.parentNode.classList.remove("flip");
        imagem[1].parentNode.parentNode.classList.remove("flip");
        imagem = [];
    }

    //console.log(segundaCarta);

    // if (imagem[0] !== imagem[1]) {
    //     let primeiraCarta = document.querySelectorAll(".flip");
    //      if (primeiraCarta !== null) {
    //          primeiraCarta[0].classList.remove("flip");
    //          console.log(primeiraCarta);
    //      }
    // }

    
}


   