async function buscaEnderenco (cep){
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = ""; //Mensagem de erro, caso digite um CEP errado
   try{ //tentar
    let consultaCEP = await fetch(`HTTPS://viacep.com.br/ws/${cep}/json/`) //API de endereços/CEP
    let consultaCepConvertido = await consultaCEP.json();
   
    if(consultaCepConvertido.erro){

        throw Error('CEP inexistente');
    }
        console.log(consultaCepConvertido);


        let rua = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let uf = document.getElementById('estado');

        
//Pegando o endereço no json(consultaCepConvertido) e escrevendo no input(html).

        rua.value = consultaCepConvertido.logradouro;
        bairro.value = consultaCepConvertido.bairro;
        cidade.value = consultaCepConvertido.localidade;
        uf.value = consultaCepConvertido.uf;



        return consultaCepConvertido;
} catch (erro){
    mensagemErro.innerHTML = "CEP inválido, digite um CEP válido" //Mensagem de erro, caso digite um CEP errado
    console.log('erro')

}
}
cep = document.getElementById('cep');
cep.addEventListener('focusout',() => buscaEnderenco(cep.value)); //focusout - Ao tirar o mouse ele pega a ação.


// Uma promises sempre vai gerar um objeto do tipo response, mesmo que ela seja aceita ou rejeitada.
// Toda promise retorna then caso ele seja resolvida ou catch caso ela seja recusada.

