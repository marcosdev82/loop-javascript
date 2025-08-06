// for...in

// Itera sobre as chaves (índices ou propriedades) de um objeto.

// Retorna strings representando as chaves (ou índices, no caso de arrays).

// É mais usado para objetos (não arrays).

 
const obj = {a: 1, b: 2};

for (let key in obj) {
  console.log(key);        // 'a', 'b'
  console.log(obj[key]);   // 1, 2
}

const arr = [10, 20, 30];

for (let index in arr) {
  console.log(index);      // '0', '1', '2' (como strings!)
  console.log(arr[index]); // 10, 20, 30
}

// for...of
// Itera sobre os valores de objetos iteráveis (como arrays, strings, maps, sets, etc), mas não itera sobre objeto comum, precisa ser convertido.

// Retorna os valores diretamente, não os índices.

// É mais apropriado para arrays e estruturas iteráveis.

const arrs = [10, 20, 30];

for (let value of arrs) {
  console.log(value); // 10, 20, 30
}

const str = "abc";

for (let char of str) {
  console.log(char); // 'a', 'b', 'c'
}

//  Se quiser usar for...of com um objeto, você precisa transformá-lo em uma estrutura iterável, por exemplo com Object.entries():

for (let [chave, valor] of Object.entries(pessoa)) {
  console.log(`${chave}: ${valor}`);
}
