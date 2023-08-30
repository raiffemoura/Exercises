
function numb(){
    number = document.querySelector("#res").value;
    
}

function resul() {

    let s = document.getElementsByTagName("h2")[0].innerHTML = "O número sorteado foi..." + Math.floor(Math.random()*number+1)
   
}

function resNomes() {
    let lista = []
    let nomes = document.querySelector("#lista").value
    lista.push(nomes)
    




    console.log(lista[0])
}

