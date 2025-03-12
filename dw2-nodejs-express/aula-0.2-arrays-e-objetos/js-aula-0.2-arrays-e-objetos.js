// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

// Métodos de manipulação de vetores

let vetor = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o: ${vetor}`);

// Inserindo no vetor de forma manual, se ja existir um elemento no indice indicado ele sobrepoem o indicie anterior
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método push = insere um novo elemento no final do vetor
vetor.push("Abacaxi");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método unshift = insere um novo elemento no incio do vetor
vetor[0] = "Pera";
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método length = retorno o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de numeros é: ${numeros}`);
console.log(`O número de elementos do vetor é: ${numeros.length}.`);

// Método sort = ordena o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora o primeiro elemento das lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}.`);

//  Ordenação de numeros com sort
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Nossa lista de números ordenada é: ${numeros}`);

//  Ordenando de forma crescente numeros com sort
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma decrescente numeros com sort
console.log(numeros.sort((a, b) => b - a));

/////////////////////////////////////////////////////////////////////////////////////////////
// Objetos literais (não são derivados de classes)
// Objetos possuem Atríbutos (Características) e Métodos (Ações)
// Lado esquerdo: chaves / Lado direito: valores

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  //  Atríbutos
  modelo: "gol",
  cor: "vermelho",
  // Métodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};
console.log(`O modelo do carro é ${carro.modelo}`)
console.log(`A cor do carro é ${carro.cor}`)
carro.acelerar()
carro.frear()

///////////////////////////////////////////////////////////////////////////////////////////////

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
};
console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}. ${produto.descricao}`)

////////////////////////////////////////////////////////////////////////////////////////////////

//  Array de objetos 
const listaProdutos =[
{
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",   

},
{
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidad de processamento",
},
{
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente. Muito barato!",
},
];
console.log()
// Exibindo o array de objetos com forEach:
listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Marca: ${produto.marca}`)
    console.log(`Preço: ${produto.preco}`)
    console.log(`Descrição: ${produto.descricao}`)
    console.log()
})

// cria uma tabela só pro console
console.table(listaProdutos)