let cartas = parseInt(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14"));
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
        <div data-identifier="card" class="total-card" onclick="girarCarta(this)">
            <div data-identifier="back-face" class="front card">
                <img src="arquivos/front.png" alt="papagaio">
            </div>
            <div data-identifier="front-face" class="back card">
                <img src="${qtdCartasEmbaralhadas[j]}" alt="gif papagaio">
            </div>
        </div>
        `
    }
}

aparecerCartas();

let imagem = [];
let jogadas = 0;
let primeiraCarta = 0;
let segundaCarta = 0;
let jogarNovamente = "";

function girarCarta(cardEscolhido) {
    
    jogadas++;
    
    if (imagem.length < 2){
        cardEscolhido.classList.add("flip");
        cardEscolhido.classList.add("desativarClick");
        imagem.push(cardEscolhido.querySelector(".back img"));
        console.log(imagem)
    }

    primeiraCarta = imagem[0];
    segundaCarta = imagem[1];

    if (imagem.length == 2) {
        if(primeiraCarta.parentNode.innerHTML !== segundaCarta.parentNode.innerHTML){
            setTimeout(removerFlip,1000);
        } else {
            imagem = [];
        }
    }

    function removerFlip() {
        imagem[0].parentNode.parentNode.classList.remove("flip");
        imagem[1].parentNode.parentNode.classList.remove("flip");
        imagem[0].parentNode.parentNode.classList.remove("desativarClick");
        imagem[1].parentNode.parentNode.classList.remove("desativarClick");
        imagem = [];
    }

    setTimeout(terminarJogo,100);
}

function terminarJogo() {
    if(document.querySelectorAll(".flip").length === cartas){
        alert(`Você ganhou em ${jogadas} jogadas!`);
        jogarNovamente = prompt(`Você quer jogar novamente? Responda s ou n`);
        jogarNovamente = jogarNovamente.toUpperCase()

        if(jogarNovamente === 'S') {
            document.location.reload(true);
        } else {
            alert("Obrigada!");
        }
    }
    
}
   