// Classes no javascript, devem inciar com a primeira letra maiúscula
class Carro {
  // Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe carro
const carroPopular = new Carro("fiat", "uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano: ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano: ${
    carroEsportivo.ano
  } e também faz ${carroEsportivo.buzinar()}`
);

//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

// Adicionando um novo método
carroEsportivo.turbo = function () {
  return "VRUM!";
};

console.log(
  `O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${
    carroEsportivo.corNeon
  }. ${carroEsportivo.turbo()}`
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Manipulando datas no javascript

const dataAtual = new Date();
console.log(typeof dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}.`);

// Pegando o mes atual
const mes = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mes}.`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
console.log(`Ano atual: ${ano}.`);

// Adicionando dias, meses e anos a data atual
// Adicionando 10 dias a data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

// Exibe a nova data:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}`);

// Adicionar 3 meses a data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}`);

// Adicionar 2 anos a data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
console.log(`Daqui a 2 anos será ${dataAtual.getFullYear()}`);
///////////////////////////////////////////////////////////////////////////////////////////
// Trabalhando com moedas no javascript
let salario = 2500.3;
console.log(salario);
// Mostrando as casas decimais
console.log(salario.toFixed(2));
// Ocultando as casas decimais
console.log(salario.toFixed(0));
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// Formatação de moeda
// Mostrando o salario em real (R$)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);

// Mostrando o salario em dolar (usd)
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);

// Convertendo de real para dolar
const salarioDolar = salario * 0.176
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "usd" })
);

// mostrando o salario em euro (eur)
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "eur" })
);

//////////////////////////////////////////////////////////////////////////////////////////////////
// formatação de string 
const nome = "Samia Muniz"

// Alterando para letras maiusculas
console.log(nome.toUpperCase())

// Alterando para letras minusculas
console.log(nome.toLowerCase())

// Contando caracteres de uma string
console.log(nome.length)

// Removendo espaços
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)