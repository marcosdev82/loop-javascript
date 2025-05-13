// Você terá um array de produtos com nome e preço. Use `forEach` para:

// 1. Exibir o nome e o preço formatado de cada produto.
// 2. Calcular e exibir o preço total de todos os produtos.
// 3. Criar um novo array apenas com os nomes dos produtos (sem usar `map`).

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Cadeira", preco: 300 },
];

produtos.forEach((produto) => {
   console.log(`nome: ${produto.nome}, preço: R$ ${produto.preco.toFixed(2)}`)
});

let total = 0;

produtos.forEach((produto) => {
    total = produto.preco + total;
});

console.log(`O preço total é: R$ ${total.toFixed(2)}`)

let nomeProdutos = []

produtos.forEach((produto) => {
    nomeProdutos.push(produto.nome)
})