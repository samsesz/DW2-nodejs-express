<<<<<<< HEAD
// Função simples 1-
function exe1 (){
   console.log("Samia, 19 anos, Registro - Sp");
} exe1();

function exe2 (n1, n2){
    let resultado = n1 / n2;
    console.log(`o resultado da divisão foi: ${resultado}`);
}
let n1 = 10;
let n2 = 2;
exe2 (n1, n2);

function exe3 (num1, num2, num3){
    let res = num1 * num2 * num3;
    console.log(`o resultado foi: ${res}`);
}
let num1 = 3
let num2 = 3
let num3 = 3
exe3(num1, num2, num3);

function exe4 (n){
    if (n => 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
let num = 19
console.log(`é ${exe4(num)}`);

let media = function (m){
    if (m <= 5){
        return "Reprovado";
    } else {
        return "Aprovado";
    }
}
m = (10 + 10)/2;
console.log(`a média é de ${m} e voce esta ${media(m)}`);

const triplo = x => {
    return x*3
}
console.log(`o triplo do numero é: ${triplo(30)}`)

const calc = (nume1, nume2, nume3, nume4) => {
    return nume1 + nume2 + nume3 + nume4;
} 
console.log (`o resultado da operação é ${calc(3, 3, 3, 3)}`);

const iife = (function (nome) {
    console.log(`seu nome é: ${nome}`)
=======
// Função simples 1-
function exe1 (){
   console.log("Samia, 19 anos, Registro - Sp");
} exe1();

function exe2 (n1, n2){
    let resultado = n1 / n2;
    console.log(`o resultado da divisão foi: ${resultado}`);
}
let n1 = 10;
let n2 = 2;
exe2 (n1, n2);

function exe3 (num1, num2, num3){
    let res = num1 * num2 * num3;
    console.log(`o resultado foi: ${res}`);
}
let num1 = 3
let num2 = 3
let num3 = 3
exe3(num1, num2, num3);

function exe4 (n){
    if (n => 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
let num = 19
console.log(`é ${exe4(num)}`);

let media = function (m){
    if (m <= 5){
        return "Reprovado";
    } else {
        return "Aprovado";
    }
}
m = (10 + 10)/2;
console.log(`a média é de ${m} e voce esta ${media(m)}`);

const triplo = x => {
    return x*3
}
console.log(`o triplo do numero é: ${triplo(30)}`)

const calc = (nume1, nume2, nume3, nume4) => {
    return nume1 + nume2 + nume3 + nume4;
} 
console.log (`o resultado da operação é ${calc(3, 3, 3, 3)}`);

const iife = (function (nome) {
    console.log(`seu nome é: ${nome}`)
>>>>>>> 2cb0fa32562d1e872be00f3037e26edb99b7d5a2
} )("samia")