window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
let voceDisse = document.querySelector('#voceDisse')
elementoChute = document.querySelector('#chute')

recognition.lang =  'pt-br'
recognition.start()


recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    
    
    chute = e.results[0][0].transcript
    exibeNumero(chute)
    verificaValorValido(chute)
    
    console.log(chute)
}

recognition.addEventListener('end', () =>  {
    recognition.start()

})


function exibeNumero (chute) {
    
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box" id="voceDisse">${chute}</span>
    `

}