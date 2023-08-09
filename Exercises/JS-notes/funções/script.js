function parImp(n = 0) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

let res = parImp(5)
console.log(res)

console.log(parImp(154))


function fatorial(n = 0) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}


console.log(fatorial(10))

function saudacao() {
    return "Olá Mundo"
}

var s = saudacao();
console.log(s)


// Nome do aluno - nota 1 - nota 2 - media - aprovado / reprovado

var nomes = ["Igor", "José", "Maria"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]



function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media){
   if(media > 7){
    return "Aprovado"
   } else {
    return "Reprovado"
   }
    
}

for (var index in nomes) {

    let n1 = notasA[index]
    let n2 = notasB[index]
    let m = media(n1, n2)

    console.log(nomes[index] +
    " - " +
    n1 +
    " - " +
    n2 +
    " - " +
    m +
    " - " + 
    passou(m)
    
    )
}


