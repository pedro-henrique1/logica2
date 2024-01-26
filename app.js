let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

mensagemInicial();

function mensagemInicial() {
  exibirTexto("h1", "Jogo do número secreto");
  exibirTexto("p", "Escolha um número entre 1 e 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroAleatorio) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTexto("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroAleatorio) {
      exibirTexto("p", "O número é menor");
    } else {
      exibirTexto("p", "O número é maior");
    }
    tentativas++;
    limparInput();
  }
}

function gerarNumero() {
  let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElemento = listaNumeroSorteados.length;
  if (quantidadeElemento == numeroLimite) {
    listaNumeroSorteados = [];
  }
  if (listaNumeroSorteados.includes(numeroGerado)) {
    return gerarNumero;
  } else {
    listaNumeroSorteados.push(numeroGerado);
    console.log(listaNumeroSorteados);
    return numeroGerado;
  }
}

function limparInput() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function reinicarJogo() {
  numeroAleatorio = gerarNumero();
  limparInput();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
