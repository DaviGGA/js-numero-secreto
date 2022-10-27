function verificaValorValido (chute) {
    const   numero = parseInt(chute)

    if (fimDeJOGO(chute)) {
         document.body.innerHTML = '<h2>Fim de Jogo!</h2>' + "<button class='jogar-novamente'>Jogar Novamente</button>"
         return
    }

    if (naoForNumero(numero)) {
       
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroMaiorMenorQuePermitido(numero)) {
       
        elementoChute.innerHTML += `<div>Valor inválido: somente valores entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (acertouNumero(numero)) {
       
        document.body.innerHTML = '<h2>Você acertou!!!</h2>' + 
            `<h3>O numero era ${numeroSorteado}</h3>` + "<button class='jogar-novamente'>Jogar Novamente</button>"
        return
    
    } else if (numero > numeroSorteado ) {
        
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
        
    } else {

        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'

    }

}

function naoForNumero(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenorQuePermitido(numero) {
    return  numero > maiorValor || numero < menorValor
}

function acertouNumero(numero) {
    console.log("chute:" + numero + "numero sorteado:" + numeroSorteado)
    return numero === numeroSorteado
}

function fimDeJOGO(chute) {
   return chute === 'game over' || 'Fim de jogo'

}

document.body.addEventListener('click', (e) => {
    if (e.target.id = 'jogar-novamente') {
        window.location.reload()
    }
})

