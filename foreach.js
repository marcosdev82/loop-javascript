// O método forEach() executa uma dada função em cada elemento de um array.
const array1 = ['a', 'b', 'c'];
array1.forEach((element, i) => {
    console.log(element, i)
})

// Imprimindo os conteúdos de uma ordem
// Os códigos a seguir logam uma linha para cada elemento na ordem:

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9

