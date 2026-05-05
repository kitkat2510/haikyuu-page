// OBJETIVO PRINCIPAL
//   quando o usuário clicar em algum icon de personagem selecionável, muda a carta do lado direito da tela.

//   - pegar todos os icones

//   - pegar todas as cartas

//   - percorrer por todos os icones 

//   - descobrir qual icone clicado 

//   - remover a classe visible de todas as cartas 

//   - adiocionar a classe visible na carta referente ao icone clicado

//1 - pegar todos os icones
const icones = document.querySelectorAll(".fotocards .img");


//2 - pegar as cartas 
const cartas = document.querySelectorAll(".personagem");

//3 - percorrer todos os icones 
icones.forEach(function(icone,indice) {

    //4 - descobrir qual icone clicado
     icone.addEventListener("click", function () {

        cartas.forEach( function(carta){
            //5 - remover a classe visible de todas as cartas

            carta.classList.remove("visivel")
        })

           //6 - adicionar a classe visible na carta referente ao icone clicado
           cartas[indice].classList.add("visivel")

     })
})