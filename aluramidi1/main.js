function tocaSom (seletorAudio){
 
 const elemento = document.querySelector(seletorAudio);
    

 if (elemento != null && elemento.localName === 'audio'){
    
     elemento.play();
   
    }

    else{
        
        alert ('Elemento não encontrado ou seletor inválido');
    
    }
}



//document.querySelector('idElementoAudio').onclick = tocaSom;


const listaDeTeclas = document.querySelectorAll('.tecla');


//para
for (let contador = 0;contador < listaDeTeclas.length; contador++){
   
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string 
    const idAudio = `#som_${instrumento}`;


tecla.onclick = function () {
        tocaSom(idAudio);
    
}


    // quando apertar o teclado para baixo
    tecla.onkeydown = function(evento) {
    console.log(evento.code === 'Space' || evento.code === 'Enter')


        if  (evento.code === 'Space' || evento.code ==='Enter'){

        tecla.classList.add('ativa');

    }

}
    
    tecla.onkeyup = function() {

        tecla.classList.remove('ativa');


    }

}
