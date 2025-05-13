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

for (key in obj) {
    // console.log(obj[key])
    console.log(obj[key].id)
    console.log(obj[key].nome)
    console.log(obj[key].email)
}

for (value of obj) {
    // console.log(value)
    console.log(value.id)
    console.log(value.nome)
    console.log(value.email)
}

const arr = [20, 45, 30, 11, 5]
for (key in arr) {
    // console.log(arr[key])
    console.log(arr[key])
}