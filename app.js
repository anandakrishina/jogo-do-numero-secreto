
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = criaNumeroAleatorio();
let tentativa = 1;

function escreverTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
  escreverTextoTela("h1", "Jogo do número secreto");
  escreverTextoTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemInicial();


function verificarChute() {
  
    let numeroPalpite = document.querySelector("input").value;
    
    if (numeroAleatorio > numeroPalpite) {
      escreverTextoTela("p", "Escolha um número maior");
    } else if (numeroAleatorio < numeroPalpite) {
      escreverTextoTela("p", "Escolha um número menor");
    } else {
      escreverTextoTela("h1", "PARABÉNS, VOCÊ ACERTOU!");
      escreverTextoTela(
        "p",
        `Esse é o número certo e você acertou com ${tentativa} tentativas`
      );
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    tentativa++;
    limparCampo();
}


function criaNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
  }


  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return criaNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
  }
}


function limparCampo(){
    numeroPalpite = document.querySelector("input");
    numeroPalpite.value = '';
}


function reiniciarJogo(){
    numeroAleatorio = criaNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}



