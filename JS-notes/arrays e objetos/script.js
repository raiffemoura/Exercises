const alunos = ["joão", "Arthur", "Maria", "Bianca", "Marcos", "Aline"]

console.log(alunos)

alunos.push("Mickael")
alunos.unshift("Giovana")
console.log(alunos)
alunos.sort()
console.log(alunos)
alunos.pop()
console.log(alunos)


for (var i in alunos) {
    console.log(i)
}


for (var i of alunos) {
    console.log(i)
}

console.log("----Testando for em uma array para criar uma lista----")


let forLenght = alunos.length
var texto = "<ul>"
for (let i = 0; i < forLenght; i++) {
    texto += "<li>" + alunos[i] + "</li>"
}
texto += "</ul>"
console.log(texto)
window.onload = function () {
    document.getElementById("demo").innerHTML = texto;
}


// ---OBJETOS---


var aluno = {nome: "Raiffe", notas:[6,8], media(m){
    var media = (aluno.notas[0] + aluno.notas[1]) / 2
    return media 
}, aprovacao(){
    if (aluno.media() >= 7){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}}

console.log(aluno.media())

console.log(`O aluno ${aluno.nome} foi ${aluno.aprovacao()} com media de ${aluno.media()}`)


































