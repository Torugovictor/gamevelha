const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const mensagemvitoriaElements = document.querySelector('[data-mensagemv]')
const mensagemVitoriabutton = document.querySelector('[data-mensagem-winner-button]')
const mensagemwinner = document.querySelector('[data-mensagemWinner]')
let vezCirculo;

const combinacaoV = [
    [0, 1, 2],
    [3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]


    
]

const inicioJogo = () => {
     
for(const cell of cellElements) {
    cell.classList.remove('circulo')
    cell.classList.remove('x')
    cell.addEventListener('click', handleClick, {once: true});
    

    }
    let vezCirculo = false;
    board.classList.add('x')
    mensagemwinner.classList.remove('show-mensagemVitoria')
};


const fimJogo = (isDraw) => {
if (isDraw) {
    mensagemvitoriaElements.innerText = 'Empate!'
} else {
    mensagemvitoriaElements.innerText = vezCirculo ? 'Circulo Venceu!' : 'X Venceu!'
}
mensagemwinner.classList.add('show-mensagemVitoria')
}




const checkV = (currentJogador) => {
    return combinacaoV.some(combinacao => {
        return combinacao.every(index => {
            return cellElements[index].classList.contains(currentJogador);
        })
    }
    )

}

const checkEmpate = () => {
    return [...cellElements].every(cell => {
     return cell.classList.contains('x') || cell.classList.contains('circulo')
    })
}

const placeMark = (cell, addClass) => {
    cell.classList.add(addClass);

}
const sTurno = () => {
vezCirculo = !vezCirculo

board.classList.remove('circulo')
board.classList.remove('x')

if (vezCirculo) {
    board.classList.add('circulo');
} else {
    board.classList.add('x');
}
}
const handleClick = (e) => {
    //colocar a jogada (x ou circulo)
    const cell = e.target; 
const addClass = vezCirculo ? 'circulo' : 'x';

placeMark(cell, addClass);
    //vitoria
const win = checkV(addClass);
//empate
const isDraw = checkEmpate();
if (win) {
    fimJogo(false)
} else if (isDraw) {
    fimJogo(true)
} else {
    //mudança de jogada
    sTurno();
    };

}


inicioJogo();

mensagemVitoriabutton.addEventListener('click', inicioJogo) 
