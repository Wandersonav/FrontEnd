function verificaSeOChutePossuiValorValido(chute){

    const numero =+ chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorPermitido(numero)){
    elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`
      return
    }
    
    if (numero === numeroSecreto){

        document.body.innerHTML = `
        
        <h2>Você acertou!</h2>
        <h3>O número secreto é ${numeroSecreto} </h3>
        
       <button id="jogar-novamente" class="btn-jogar">Reiniciar Jogo</button>` 
       
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa fa-arrow-down" aria-hidden="true"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa fa-arrow-up" aria-hidden="true"></i></div>`

    }

    }

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
    return (numero<menorValor || numero>maiorValor )
    
   
}

document.body.addEventListener('click', e =>{

    if(e.target.id == 'jogar-novamente'){
        window.location.reload()   //Reiniciar a página
    }
})
