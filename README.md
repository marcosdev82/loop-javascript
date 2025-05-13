# 🧪 Exercício: Utilizando o `forEach` em JavaScript

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
