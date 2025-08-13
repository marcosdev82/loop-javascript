// O forEach é uma função útil em JavaScript para iterar sobre arrays, mas há situações em que ele é apropriado e outras em que deve ser evitado.
// - Você não precisa retornar valores, pois forEach não retorna um novo array.

// quando não usar forEach 

// 1. Quando precisar encerrar o loop com break ou return, Para isso, use um for, for...of ou some
// 2. Quando precisar transformar o array em outro array - Use map ao invés de forEach para retornar um novo array
// 3. Quando estiver lidando com funções assíncronas dentro do forEach — ele não espera promessas.

// exercicios

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

// produtos.forEach((produto) => {
//    console.log(`nome: ${produto.nome}, preço: R$ ${produto.preco.toFixed(2)}`)
// });

// let total = 0;

// produtos.forEach((produto) => {
//     total = produto.preco + total;
// });

// console.log(`O preço total é: R$ ${total.toFixed(2)}`)

// let nomeProdutos = []

// produtos.forEach((produto) => {
//     nomeProdutos.push(produto.nome)
// })

// -------------------------------------------

produtos.forEach((produto) => {
  console.log(`nome: ${produto.nome}, preço: R$ ${produto.preco.toFixed(2)}`)
  console.log('-------------------')
})

let total = 0
produtos.forEach((produto) => {
  total+=produto.preco; 
})
console.log(`Preço total é: R$ ${total.toFixed(2)}`)
console.log(`-------------------`)

let nomesProdutos = []

produtos.forEach((produto) => {
  nomesProdutos.push(produto.nome)
})
console.log(nomesProdutos)