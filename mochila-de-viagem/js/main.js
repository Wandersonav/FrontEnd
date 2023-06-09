const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

const itens = JSON.parse(localStorage.getItem("itens")) || []; //transformando a string em array novamente

// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 

itens.forEach((elemento) => {
    criaElemento(elemento)
    
})

form.addEventListener("submit", (evento) => {
evento.preventDefault()

const nome = evento.target.elements['nome']
const quantidade = evento.target.elements['quantidade']

const itemAtual = {
    "nome":nome.value,                                    //Criando um objeto que contém nome e quantidade
    "quantidade":quantidade.value
}

const existe = itens.find(elemento => elemento.nome === nome.value); //Buscando o elemento nome no array, para saber se ele existe
   
//console.log(existe);

function atualizaElemento(item){

       
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade // essa função atualiza os elementos

}

if(existe){
    itemAtual.id = existe.id

    atualizaElemento(itemAtual)
    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
} else {
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0; //operador ternario SE/ENTÃO


//  itens[existe.id] = itemAtual    
//} else {
//   itemAtual.id = itens.length // item vai receber o ID do tamanho que estiver o array
  
criaElemento(itemAtual) // cria o item
    itens.push(itemAtual)  //Pego o item e coloco no array item.
    
}


localStorage.setItem("itens",JSON.stringify(itens))  //O JSON.stringify tranforma o nosso objeto em texto.

nome.value = ""
quantidade.value = ""
}) 



function criaElemento(item){

    //console.log(nome);
   // console.log(quantidade);

    //<li class="item"><strong>7</strong>Camisas</li>

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
  
    

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    novoItem.appendChild(numeroItem)   //Os elemento criados via JavaScript são objetos que devem ser manipulados como objeto através do appendChild
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(deletaBotao());
    lista.appendChild(novoItem); //adiciona o novoItem na lista

}

function deletaBotao(){

    const elementoBotao = document.createElement("button")

    elementoBotao.innerHTML = "X"

    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode)   // this e filho do li
    })

    return elementoBotao;
 }

 function deletaElemento(tag, id){
    tag.remove() 

    {itens.splice(itens.findIndex(elemento => elemento.id === id), 1) 
        localStorage.setItem("itens", JSON.stringify(itens))    //remover aquela tag 
   }

}
