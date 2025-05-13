
// Você receberá um objeto que contém informações sobre um aluno, como nome, idade, curso e notas. Seu objetivo é:

// 1. Iterar sobre as propriedades do objeto com `for...in`.
// 2. Exibir as chaves e seus respectivos valores.
// 3. Identificar quais propriedades são numéricas (por exemplo, notas) e calcular a média dessas propriedades.

const aluno = {
  nome: "João Silva",
  idade: 20,
  curso: "Engenharia",
  nota1: 7.5,
  nota2: 8.0,
  nota3: 9.2,
  nota4: 6.8,
};

for(let key in aluno) {
    console.log(`${key}: ${aluno[key]}`)
}

let somaNotas = 0;
for(let key in aluno) {
    if (typeof aluno[key] === 'number' && key !== 'idade')
        somaNotas += aluno[key];
}

console.log(`A média das notas é: ${somaNotas / 4}`)