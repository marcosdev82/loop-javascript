// Resumo das partes:
// Array de objetos → [...]

// Objeto → {...}

// Par chave-valor → "chave": valor (ou propridade)

const obj = [
  {
    "id": 1,
    "nome": "Ana Clara Mendes",
    "email": "ana.clara@example.com"
  },
  {
    "id": 2,
    "nome": "Bruno Ferreira",
    "email": "bruno.ferreira@example.com"
  },
  {
    "id": 3,
    "nome": "Camila Souza",
    "email": "camila.souza@example.com"
  },
  {
    "id": 4,
    "nome": "Diego Lima",
    "email": "diego.lima@example.com"
  },
  {
    "id": 5,
    "nome": "Eduarda Ribeiro",
    "email": "eduarda.ribeiro@example.com"
  },
  {
    "id": 6,
    "nome": "Felipe Martins",
    "email": "felipe.martins@example.com"
  },
  {
    "id": 7,
    "nome": "Gabriela Torres",
    "email": "gabriela.torres@example.com"
  },
  {
    "id": 8,
    "nome": "Henrique Costa",
    "email": "henrique.costa@example.com"
  },
  {
    "id": 9,
    "nome": "Isabela Rocha",
    "email": "isabela.rocha@example.com"
  },
  {
    "id": 10,
    "nome": "João Pedro Almeida",
    "email": "joao.almeida@example.com"
  }
]

// Itera sobre objeto comum. Não itera sobre map / set

// Exemp: 

const pessoa = {
  nome: "Lucas",
  idade: 30,
  email: "lucas@email.com"
};

// Você pode usar for...in para percorrer as chaves de um objeto comum.
for (let key in obj) {
  console.log(`Key:${key}`)
  console.log(`id: ${obj[key].id}`)
  console.log(`Key: ${obj[key].nome}`)
  console.log(`Key: ${obj[key].email}`)
  console.log('--------------')
}

// itera sobre Array, String, Map e Set
for (let [key, pessoa] of Object.entries(obj)) {
  console.log(key)
  console.log(pessoa.id);
  console.log(pessoa.nome);
  console.log(pessoa.email);
  console.log('--------------');
}

// Resumo prático
// Objeto comum: { nome: "Ana", idade: 25 }

// Objeto especial: Arrays, Maps, Dates, Sets, Promises, Funções, Instâncias de classe.

// Maps
const mapa = new Map();
mapa.set("nome", "Carlos");
mapa.set(123, "Número");
console.log(mapa.get("nome")); // Carlos
