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
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano: ${carroPopular.ano} e faz ${carroPopular.buzinar()}`);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano: ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}`);

//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul"

// Adicionando um novo método
carroEsportivo.turbo = function (){
    return "VRUM!"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)