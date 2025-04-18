class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return "Está correndo!";
    }
    andar(){
        return "Ele cansou e agora está andando...";
    }
    atacar(){
        return "Ele socou um vilão";
    }
    defender(){
        return "Ele se defendeu do soco do vilão";
    }
}

const homemAranha = new Heroi();
homemAranha.nome = "Homem-aranha";
homemAranha.vida = "1";
homemAranha.velocidade = "0";
homemAranha.forca = "0";
homemAranha.teia = 0;

homemAranha.sentidoAranha = function(){
    return "O homem-aranha sentiu o perigo!"
}

console.log(`O heroi ${homemAranha.nome} de vida: ${homemAranha.vida} velocidade: ${homemAranha.velocidade} força: ${homemAranha.forca} ${homemAranha.teia}. ${homemAranha.sentidoAranha()}. Agora ele ${homemAranha.correr()} ${homemAranha.andar()} ${homemAranha.atacar()} e agora ${homemAranha.defender()}`);

console.log();

const superman = new Heroi();
superman.nome = "Superman"
superman.vida = "300"
superman.velocidade = "200"
superman.forca = "100"
superman.podeVoar = 0

superman.visaoCalor = function (){
    return "O superman está usando a visao de calor!"
}

console.log(`O heroi ${superman.nome} de vida: ${superman.vida} velocidade: ${superman.velocidade} força: ${superman.forca} ${superman.podeVoar}. ${superman.visaoCalor()}. Agora ele ${superman.correr()} ${superman.andar()} ${superman.atacar()} e agora ${superman.defender()}`);

console.log();

const batman = new Heroi()
batman.nome = "batman"
batman.vida = "200"
batman.velocidade = "50"
batman.forca = "100"
batman.esconder = 1

batman.invertigar = function(){
    return "O batman está investigando!"
}

console.log(`O heroi ${batman.nome} de vida: ${batman.vida} velocidade: ${batman.velocidade} força: ${batman.forca} ${batman.esconder}. ${batman.invertigar()}. Agora ele ${batman.correr()} ${batman.andar()} ${batman.atacar()} e agora ${batman.defender()}`);

/////////////////////////////////////////
console.log()
const exibirData = () => {
    const hoje = new Date ();
    hoje.setDate(hoje.getDate() + 3);
    hoje.setMonth(hoje.getMonth() + 2);
    hoje.setFullYear(hoje.getFullYear() + 1);

    console.log(`${hoje.getDate()}/ ${hoje.getMonth()}/ ${hoje.getFullYear()}`);
}

exibirData();
console.log()
////////////////////////////////////////////////////////////////////
console.log()
const salDol = (salReal) => {
    return salReal = 0.176;
}

const salEuro = (salReal) => {
    return salReal = 0.16;
}

console.log(`O salario em dolar e ${salDol (2000).toLocaleString("en", {style: "currency",
    currency: "USD"})}`)

console.log(`O salario em euro e ${salDol (2000).toLocaleString("en", {style: "currency",
    currency: "EUR"})}`)
console.log()
//////////////////////////////////////////////////////////////////////////////
const nome = "Samia Muniz"
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.length)
