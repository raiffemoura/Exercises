let lista = document.getElementById("lista")
let num = parseInt(lista.getAttribute("data-num"))

console.log(lista.dataset.num)


let conteudo = ""
for(let i = 0; i < num; i++ ){
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo