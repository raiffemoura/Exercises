// O Map é um metodo nativo do JS, utilizado na manipulaão de dados dentro de arrays.
// Funciona semelhante a uma estrutura de repetição, como um loop, 
// pois executa algum ação em todos os elementos do array


const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map((number) => number*2)
console.log("Lista de numberos => " + numbers)
console.log("Lista de numeros multiplicada por 2 usando o metodo map => " + numbersMultipliedByTwo)


// O método filter() nos permite fazer filtragem de elementos.
// Cria uma nova array com os elementos que passaram no filtro que fornecemos.

const ages= [6, 3, 33, 30, 54, 67];
console.log("Lista com idades => " + ages)

const evenAges = ages.filter((ages) => ages % 2 === 0)
console.log("Idades pares da lista de idades => " +evenAges)

const oddAges = ages.filter((ages) => ages % 2 !== 0)
console.log("Idades impares da lista de idades => " + oddAges)

// A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para
// criar um objeto final com base em alguma regra. 
// Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.

// Útil quando queremos reduzir todos os valores de uma lista para um só... 
//por exemplo somar os valores de uma lista

const sumOfAges = ages.reduce((age, accumulator) => accumulator + age, 0)
console.log(sumOfAges)