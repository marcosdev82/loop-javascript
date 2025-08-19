
// Você receberá um objeto que contém informações sobre um aluno, como nome, idade, curso e notas. Seu objetivo é:

// 1. Iterar sobre as propriedades do objeto com `for...in`.
// for (let key in aluno) {
//   console.log(`${key}: ${aluno[key]}`)
// }

// 2. Identificar quais propriedades são numéricas (por exemplo, notas) e calcular a média dessas propriedades.

// const aluno = {
//   nome: "João Silva",
//   idade: 20,
//   curso: "Engenharia",
//   nota1: 7.5,
//   nota2: 8.0,
//   nota3: 9.2,
//   nota4: 6.8,
// };

// Você receberá um objeto que contém informações sobre um aluno, como nome, idade, curso e notas. Seu objetivo é:

// 1. Iterar sobre as propriedades do objeto com `for...in`.

const aluno = {
  nome: "João Silva",
  idade: 20,
  curso: "Engenharia",
  nota1: 7.5,
  nota2: 8.0,
  nota3: 9.2,
  nota4: 6.8,
};

for(let k in aluno) {
  console.log(`${k}: ${aluno[k]}`)
}

console.log('----------')

for(let [k, v] of Object.entries(aluno)) {
  console.log(`${k}: ${v}`)
}


// typeof não diferencia array de objeto 