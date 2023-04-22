const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = escolhaNumero();

function escolhaNumero(){

return parseInt(Math.random()* maiorValor + 1); //gerar número aleatório

}
console.log(numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;

