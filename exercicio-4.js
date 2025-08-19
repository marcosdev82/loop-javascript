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

//4. Calcular o fatorial de um número
// O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a esse número.

// let numero = 5;
// let resultado = 1;

// while (numero > 1) {
//   resultado *= numero;
//   numero--;
// }

//5. Ler números do usuário até digitar 0 (simulado com array)

// const entradas = [5, 12, 7, 0]; // simula entrada do usuário
// let i = 0;

// while (entradas[i] !== 0) {
//   console.log("Você digitou:", entradas[i]);
//   i++;
// }


// -------------------------------

let i = 1;

while(i <= 10) {
    console.log(i)
    i++
}
console.log('---')

//2. Somar números até que a soma ultrapasse 100
let soma = 0
let num = 1

while(soma <= 100) {
    soma+=num
    num++
}
console.log(soma)

//3. Contar números pares de 0 a 20, sendo que 0 não é par
let par = 0;

while(par <= 20) {
    if (par%2==0 && par !== 0){
        console.log(par)
    }
    par++
}

console.log('---')

//4. Calcular o fatorial de um número
// O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a esse número.
let fatorial = 5;
let $i = 0;

while($i <= fatorial) { //1,2,5,26
    $i*=$i
    $i++
}

console.log($i)