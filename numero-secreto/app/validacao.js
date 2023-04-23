function verificaSeOChutePossuiValorValido(chute){

    const numero =+ chute;
    console.log(numeroForMaiorOuMenorPermitido(numero))

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorPermitido(numero)){
    elementoChute.innerHTML += `<div>Valor inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`
    console.log(numeroForMaiorOuMenorPermitido(numero))
    }
    
    if (numero === numeroSecreto){

        document.body.innerHTML = `
        
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}
        `
    }

    }

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero){
    return (numero<menorValor || numero>maiorValor )
    
   
}
