/*
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        notas: [n1, n2],
        media: function () {
            return (this.notas[0] + this.notas[1]) / 2
        }
    }
}

var turma = [
  criarAluno("Raiffe", 9, 6),
  criarAluno("Pathy", 7, 8),
  criarAluno("Sophia", 9, 8.5  )
]
turma.forEach(function(i){
    console.log(i)
})


for (var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media())
}*/


//-------------

function aluno(nome, n1,n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}


var a = new aluno("Pedro", 9,5);
var b = new aluno ("Maria", 8,8.5);

console.log(a);
console.log(b);


 