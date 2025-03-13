let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",     "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",     "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",     "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",     "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins" ];

console.log("Os estados brasileiros são: ");
estados.forEach((estados, i) => {
    console.log(`${i+1} - ${estados}`);
})
//////////////////////////////////////////////////////////////////////////////////
const pessoa = {
    nome: "Samia",
    idade: 19,
    cidade: "Registro",
    hobby: "Crochê, videogame, custura e leitura",
    música: "Lovely - Twenty One Pilots",
};
console.log(`${pessoa.nome}`)
console.log(`${pessoa.idade}`)
console.log(`${pessoa.cidade}`)
console.log(`${pessoa.hobby}`)
console.log(`${pessoa.música}`)
//////////////////////////////////////////////////////////////////////////////////
const filmes =[{
    titulo: "Heretic",
    genero: "Terror/Suspense",
    ano: 2024,
    minhaNota: "5 estrelas"
},
{
    titulo: "Conclave",
    genero: "Misterio/Suspense",
    ano: 2024,
    minhaNota: "5 estrelas, favorito"
},
{
    titulo: "Beetlejuice",
    genero: "Fantasia/Comédia",
    ano: 1988,
    minhaNota: "4,5 estrelas"
},
{
    titulo: "De volta pro futuro 2",
    genero: "Comédia, Ficção Cientifica, Aventura",
    ano: 1989,
    minhaNota: "5 estrelas, favorito!"
},
{
    titulo: "Star wars - Episodio 3 A vingança dos sith",
    genero: "Ação, Ficção Cientifica, Aventura",
    ano: 2005,
    minhaNota: "5 estrelas, favorito!!!!!"
},
];
console.log()

filmes.forEach(filme => {
    console.log(`Título: ${filme.titulo}`)
    console.log(`Gênero: ${filme.genero}`)
    console.log(`Ano: ${filme.ano}`)
    console.log(`Minha nota: ${filme.minhaNota}`)
    console.log()
})

console.table(filmes)