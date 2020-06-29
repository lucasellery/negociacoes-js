// let carro = {
//     velocidade: 100,
//     acelera :() => {
//         console.log(this);
//         console.log(`Carro a ${this.velocidade} km por hora!`);
//     }
// };
// // carro.acelera();

// let objeto1 = {
//     nome: 'Bob'
// };

// let objeto2 = {
//     nome: 'Leo'
// };

// function exibeNome () {
//     console.log(this.nome);

// }

// Reflect.apply(exibeNome, objeto1, []);


// Teste de Proxy

// let funcionario = new Proxy({ email: 'lucas@gmail.com' }, {

//     get(target, prop, receiver) {

//         console.log("Armadilha aqui");
//         return '**' + Reflect.get(target, prop, receiver) + '**';
//     }
// });

// console.log(funcionario.email);

// class Funcionario {

//     constructor(email) {
//         this._email = email;
//     }

//     get email() {
//         return this._email;
//     }

//     set email(email) {
//         this._email = email;
//     }
// }

// let funcionario = new Proxy(new Funcionario('lucas@gmail.com'), {
//     get(target, prop, receiver) {
//         console.log("trap here");
//         console.log(prop);

//         return Reflect.get(target, prop, receiver);
//     }
// });

// console.log(funcionario.email);

let funcionario = { email: 'abc@gmail.com' };

let funcionarioProxy = new Proxy(funcionario, {

    set(target, prop, value, receiver) {
        console.log(`Valor antigo: ${target[prop]}, valor atual: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});

funcionarioProxy.email = 'aaa@aaa.com';
