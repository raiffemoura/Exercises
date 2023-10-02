$("li").remove(".item2, .item3");

let lista1 = $("#lista1");

lista1.append("<li> Item Teste </li>");
lista1.prepend("<li> Novo Item Teste </li>");

lista1.after("<h1> Novo Titulo</h1>");
lista1.before("<h3>Novo Titulo Teste</h3?");

let rect = $(".rect");
rect.before(" Item teste");
