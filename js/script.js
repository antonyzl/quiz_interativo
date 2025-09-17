import {aleatorio} from './aleatorio.js';
import {perguntas} from './pergunta.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector (".iniciar-btn");
const telaIniciar = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
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

function mostraAlternativas() {
  for(const alternativas of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativas.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proximmo !== undefined) {
        atual = opcaoSelecionada.proxima;
}else {
        mostrarResultado();
        return;
    }
    mostrarPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = `Após tudo isso, ${nome} descobriu que`;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add("mostrar");
  botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classlist.remove("mostrar");
    mostrarPergunta();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();
