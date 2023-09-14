var pessoa = {
  name: "Raiffe Moura",
  age: 30,
};

var contato = {
  phone: 83988776655,
  email: "raiffemoura@gmail.com",
};

var copia = { ...pessoa, city: "João Pessoa", ...contato };
copia.age = 40;
console.log(pessoa);
console.log(copia);

//

var aluno = {
  matricula: 1234,
  nome: "Patricia",
  telefone: 83988776655,
  email: "pathy@gmail.com",
  cidade: "João Pessoa",
};

var { matricula, nome, ...resto } = aluno;
console.log(nome);
console.log(matricula);
console.log(resto);

//

aluno1 = {
  nome: "Marcos",
  matricula: 321,
  telefone: 8391122334455,
  cidade: "Campina Grande",
};

aluno2 = {
  nome: "Joao",
  matricula: 234,
  telefone: 83955667788,
  cidade: "Souza",
};

aluno3 = {
  nome: "Felipe",
  matricula: 345,
  telefone: 83977665544,
  cidade: "Patos",
};

var alunos = [aluno1, aluno2, aluno3];

var [qualquer, ...outros] = alunos;

console.log(qualquer);
console.log(outros);
