// Array (vetor ou lista)

let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(Produtos)

console.log("Exibindo a lista pelos indices...")
console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])

console.log("Exibindo a lista através do For...")
for(let c in Produtos){
    console.log(`${Number(c) + 1} - ${Produtos[c]}`)
}

console.log("Exibindo a lista através do forEach...")
Produtos.forEach(function (produto){
    console.log(produto)
})

console.log("Exibindo a lista através do forEach com os índices...")
Produtos.forEach((produto, i) => {
    console.log(`${i+1} - ${produto}`)
})

