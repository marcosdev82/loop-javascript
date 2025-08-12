//1. Contar de 1 a 10

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//2. Somar números até que a soma ultrapasse 100

// let soma = 0;
// let numero = 1;

// while (soma <= 100) {
//   soma += numero;
//   numero++;
// }
// console.log("Soma final:", soma);

//3. Contar números pares de 0 a 20

// let i = 0;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//4. Ler números do usuário até digitar 0 (simulado com array)

// const entradas = [5, 12, 7, 0]; // simula entrada do usuário
// let i = 0;

// while (entradas[i] !== 0) {
//   console.log("Você digitou:", entradas[i]);
//   i++;
// }

//5. Calcular o fatorial de um número

// let numero = 5;
// let resultado = 1;

// while (numero > 1) {
//   resultado *= numero;
//   numero--;
// }

// -------------------------------

//1. Contar de 1 a 10
let i = 1;
while(i <= 10) {
    console.log(i++)
}

// 2. Somar números até que a soma ultrapasse 100
let soma = 0;
let numero = 1;

while (soma <= 100) {
    soma += numero;
    numero++;
}
console.log("Soma final:", soma);

//3. Contar números pares de 0 a 20
let num = 1; // 21  
while(num <= 20) { //1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    if (num%2==0) {
        console.log(num) //2,4,6,8,10,12,14,16,18,20
    }
    num++ // 21
}

//4. Ler números do usuário até digitar 0 (simulado com array)
const entradas = [5, 12, 7, 0]; // simula entrada do usuário
let i = 0;