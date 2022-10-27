let maiorValor = 100
let menorValor = 1
const botao = document.querySelector('.jogar-novamente')
const elementoMaiorValor = document.querySelector('#maior-valor')
const elementoMenorValor = document.querySelector('#menor-valor')
const numeroSorteado = sorteiaNumero(menorValor,maiorValor)

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor 

function sorteiaNumero(min,max) {  
    return parseInt(Math.random() * (max-min)) + min; 
}

console.log(numeroSorteado)

