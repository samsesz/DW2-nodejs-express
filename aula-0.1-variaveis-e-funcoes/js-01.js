// comentário em linha
/* comentário
em bloco */
// CRTL + ; = Atalho

// declaração de variáveis em js
// Cons ou Let ou Var
// no escopo global const não pode ser alterada

const nome = "Diego"; //const precisa de valor
let Nome; //permite iniciar a variável vazia

// const nome = "Pedro" -> Resulta em um erro
// Let nome -> Resulta em um erro
var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor

const message = "Hello world!";
console.log(message);

// typeof = esse comando exibira o tipo da variavel
// const sempre precisa ter um valor inicial

const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// o javascript é uma linguagem de tipagem dinâmica e tipagem fraca.
/////////////////////////////////////////////////////////////////////////////////////////////////////

//  tipos de funções no javascript
function minhaFuncao() {}
console.log(typeof minhaFuncao);

// Função simples
function saudacao() {
  console.log("Oi");
}
saudacao();

// funçao com parametro / argumento
// parametro = é um dado que a função recebe.
// argumento = é o dado que é evniado para a função
function Saudacao(nome) {
  console.log("oi " + nome); // concatenando
  // usando template string
  console.log(`ola ${nome}`);
  // ${} -> placeholder
}
Saudacao("Sam"); // argumento

// função com mais de um parametro
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`o resultado da soma foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

// função com retorno
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`a soma dos dois numeros foi ${Soma(2, 6)}.`);

// função com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`o numero ${num} é ${parImpar(num)}`);

// função anonima
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`o dobro do numero é ${dobro(15)}`);

// arrow function com parametro unico
// se tiver dois parametros precisa dos parenteses
const Dobro = x => {
    return x*2
}
console.log(`dobro com arrow function. resultado: ${Dobro(20)}`)

// arrow com mais de um parametro
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`o resultado da operação é ${calc(6, '*', 6)}`)
// operadores matematicos tem que ser string, ou seja, em aspas simples

// simplificando arrow function com apenas um retorno
const Calc = (num1, operador, num2) => eval (`${num1} ${operador} ${num2}`)
console.log(`o resultado da operação é ${Calc(7, '*', 7)}`)

// IIFE- Imediately Invoked Function Expression
// funçao imediata
const iife = (function () {
    console.log("estou sendo executada")
}) ()

// com parametro
const start = (function (app){
    console.log(`executando ${app}`)
})("zap")