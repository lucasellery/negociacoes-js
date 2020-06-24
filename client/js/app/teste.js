// let carro = {
//     velocidade: 100,
//     acelera :() => {
//         console.log(this);
//         console.log(`Carro a ${this.velocidade} km por hora!`);
//     }
// };
// carro.acelera();

let objeto1 = {
    nome: 'Bob'
};

let objeto2 = {
    nome: 'Leo'
};

function exibeNome () {
    console.log(this.nome);
    
}

Reflect.apply(exibeNome, objeto1, []);
