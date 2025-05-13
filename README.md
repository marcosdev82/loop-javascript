# 🧪 Exercício 1: Utilizando o `forEach` em JavaScript

## 🎯 Objetivo

Praticar o uso do método `forEach` para iterar sobre arrays e realizar ações com os elementos.

## 📘 Descrição

Você terá um array de produtos com nome e preço. Use `forEach` para:

1. Exibir o nome e o preço formatado de cada produto.
2. Calcular e exibir o preço total de todos os produtos.
3. Criar um novo array apenas com os nomes dos produtos (sem usar `map`).

## 🧩 Código do Exercício

```javascript
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Cadeira", preco: 300 },
];

// 1. Exibir nome e preço formatado
console.log("Lista de produtos:");
produtos.forEach(produto => {
  console.log(`- ${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});

// 2. Calcular o preço total
let precoTotal = 0;
produtos.forEach(produto => {
  precoTotal += produto.preco;
});
console.log(`\n💰 Preço total: R$ ${precoTotal.toFixed(2)}`);

// 3. Criar array com apenas os nomes
const nomes = [];
produtos.forEach(produto => {
  nomes.push(produto.nome);
});

console.log("\n📝 Nomes dos produtos:", nomes);
´´´

# 🔁 Exercício 2: Iterando com `for...in` em JavaScript

## 🎯 Objetivo

Praticar a iteração de propriedades de objetos com o loop `for...in`.

## 📘 Descrição

Você receberá um objeto que contém informações sobre um aluno, como nome, idade, curso e notas. Seu objetivo é:

1. Iterar sobre as propriedades do objeto com `for...in`.
2. Exibir as chaves e seus respectivos valores.
3. Identificar quais propriedades são numéricas (por exemplo, notas) e calcular a média dessas propriedades.

## 🧩 Código do Exercício

´´´javascript
const aluno = {
  nome: "João Silva",
  idade: 20,
  curso: "Engenharia",
  nota1: 7.5,
  nota2: 8.0,
  nota3: 9.2
};

let somaNotas = 0;
let quantidadeNotas = 0;

for (let chave in aluno) {
  console.log(`${chave}: ${aluno[chave]}`);

  // Verifica se a chave começa com "nota"
  if (chave.startsWith("nota")) {
    somaNotas += aluno[chave];
    quantidadeNotas++;
  }
}

const media = somaNotas / quantidadeNotas;
console.log(`\n📊 Média das notas: ${media.toFixed(2)}`);

