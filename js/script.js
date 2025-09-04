import {aleatorio} from './aleatorio.js';
import {pergunta} from './pergunta.js';

const caixaPrincipal = document.querySelector(".caixa-principal;");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const botaoIniciar = document.querySelector (".iniciar-btn");
const telaIniciar = document.querySelector(".tela-inicial");

let anual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciarJogo);

function iniciaJogo() {
    atual = 0;
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostrarPergunta();
}

function mostrarPergunta(){
    if(atual >= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {}

function mostraResultado() {
  caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add(".mostrar");
  botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}
