//  1. Número Primo: verificar se um número é primo usando `while`

// let numero = 29;
// let i = 2;
// let ehPrimo = true;

// while (i < numero) {
//   if (numero % i === 0) {
//     ehPrimo = false;
//     break;
//   }
//   i++;
// }

// console.log(`${numero} é primo?`, ehPrimo);




//  2. Inverter uma string


// let str = "javascript";
// let reversed = "";
// let i = str.length - 1;

// while (i >= 0) {
//   reversed += str[i];
//   i--;
// }

// console.log("Invertido:", reversed);




//  3. Remover elementos duplicados de um array manualmente


// let array = [1, 2, 2, 3, 4, 4, 5];
// let i = 0;
// let resultado = [];

// while (i < array.length) {
//   if (!resultado.includes(array[i])) {
//     resultado.push(array[i]);
//   }
//   i++;
// }

// console.log("Sem duplicados:", resultado);




//  4. Simular saque de caixa eletrônico (cédulas de 100, 50, 20, 10)


// let valor = 280;
// let cedulas = [100, 50, 20, 10];
// let i = 0;

// while (valor > 0 && i < cedulas.length) {
//   let qtd = Math.floor(valor / cedulas[i]);
//   if (qtd > 0) {
//     console.log(`${qtd} cédula(s) de R$${cedulas[i]}`);
//     valor -= qtd * cedulas[i];
//   }
//   i++;
// }

//  5. Adivinhar número secreto com tentativas limitadas (simulado)


// let numeroSecreto = 7;
// let tentativas = 0;
// let maxTentativas = 3;
// let palpites = [5, 3, 7]; // simula entrada do usuário
// let acertou = false;

// while (tentativas < maxTentativas) {
//   if (palpites[tentativas] === numeroSecreto) {
//     acertou = true;
//     break;
//   }
//   tentativas++;
// }

// console.log(acertou ? "Acertou!" : "Errou todas as tentativas.");
