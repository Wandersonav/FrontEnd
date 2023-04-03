const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");



form.addEventListener("submit", (evento)=>{
evento.preventDefault()

const nome = evento.target.elements['nome']
const quantidade = evento.target.elements['quantidade']

criaElemento(nome.value, quantidade.value);
nome.value = ""
quantidade.value = ""

}) 

function criaElemento(nome, quantidade){

    console.log(nome);
    console.log(quantidade);

    //<li class="item"><strong>7</strong>Camisas</li>

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
  
  
    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem)   //Os elemento criados via JavaScript são objetos que devem ser manipulados como objeto através do appendChild
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem); //adiciona o novoItem na lista

    const itemAtual = {
        "nome":nome,                                    //Criando um objeto que contém nome e quantidade
        "quantidade":quantidade
    }

    localStorage.setItem("item", itemAtual)

}