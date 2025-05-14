// Exercício 1: Contagem de 1 a 10
// let n = 1 
// while(n <= 10) {
//     console.log(n++)
// } 

// Exercício 2: Somar números até o usuário digitar 0
let soma = 0
let num = parseInt(prompt("Digite um número (0 para sair):"));

while(num === 0) {
    soma +=num
    num = parseInt(prompt("Digite outro número (0 para sair):"));
}
console.log('Soma total: ' + soma)
// Exercício 3: Verificar senha
// Exercício 4: Tabuada de um número
// Exercício 5: Números pares de 0 a 20

