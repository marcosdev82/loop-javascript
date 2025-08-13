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

//5. Calcular o fatorial de um número
// O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a esse número.

// let numero = 5;
// let resultado = 1;

// while (numero > 1) {
//   resultado *= numero;
//   numero--;
// }

//6. Ler números do usuário até digitar 0 (simulado com array)

// const entradas = [5, 12, 7, 0]; // simula entrada do usuário
// let i = 0;

// while (entradas[i] !== 0) {
//   console.log("Você digitou:", entradas[i]);
//   i++;
// }


// -------------------------------

let i = 1

while(i <= 10) {
    console.log(i)
    i++
}

//2. Somar números até que a soma ultrapasse 100

let num = 0;
let total = 1

while(num <= 100) {
    num+=total
    total++
}
console.log(num)

//3. Contar números pares de 0 a 20

let pares = 1;
let totalPares = 0
while (pares <= 20) {
    if (pares%2==0) {
        console.log(pares)
        totalPares+=1
    }
    pares++
}
console.log(totalPares)
console.log('------------------')

// 5. Calcular o fatorial de um número

let numero = 5;
let resultado = 1;

while (numero > 1) {
  resultado *= numero;
  numero--;
}
console.log(resultado)