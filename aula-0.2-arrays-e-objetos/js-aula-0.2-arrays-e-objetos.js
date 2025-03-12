// ARRAY (Vetor ou Lista)
let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(Produtos)

console.log("Exibindo a lista pelos índices...")
console.log(`1 - ${Produtos[0]}`)
console.log(`2 - ${Produtos[1]}`)
console.log(`3 - ${Produtos[2]}`)
console.log(`4 - ${Produtos[3]}`)

console.log("Exibindo a lista através do FOR...")
for (let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo lista através do forEach...")
Produtos.forEach(function (produto) {
    console.log(produto)
})

console.log("Exibindo lista através do forEach com os índices...")
Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})

// Métodos de manipulação de vetores 

let vetor = ['Laranja', 'Maça', 'Banana']
console.log (`Nosso vetor é o: ${vetor}`)

// Inserindo no vetor de forma manual, se ja existir um elemento no indice indicado ele sobrepoem o indicie anterior 
vetor[3] = 'Morango'
console.log(`Nosso vetor agora é o: ${vetor}`)

// Método push = insere um novo elemento no final do vetor
vetor.push('Abacaxi')
console.log(`Nosso vetor agora é o: ${vetor}`)

// Método unshift = insere um novo elemento no incio do vetor 
vetor[0] = 'Pera'
console.log(`Nosso vetor agora é o: ${vetor}`)
vetor.unshift('Laranja')
console.log(`Nosso vetor agora é o: ${vetor}`)

// Método length = retorno o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3, 800, 200]
console.log(`Nossa lista de numeros é: ${numeros}`)
console.log(`O número de elementos do vetor é: ${numeros.length}.`)

// Método sort = ordena o vetor 
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`)
vetor.sort()
console.log(`Agora o primeiro elemento das lista de frutas é: ${vetor[0]}.`)
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}.`)

//  Ordenação de numeros com sort
console.log(`Nossa lista de números é: ${numeros}`)
numeros.sort()
console.log(`Nossa lista de números ordenada é: ${numeros}`)

//  Ordenando de forma crescente numeros com sort
console.log(numeros.sort((a, b) => a - b))

// Ordenando de forma decrescente numeros com sort
console.log(numeros.sort((a, b) => b - a))
