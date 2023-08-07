
function numb(){
    number = document.querySelector("#res").value;
    console.log(number)
}

function resul() {

    let s = document.getElementsByTagName("h2")[0].innerHTML = "O número sorteado foi..." + Math.round(Math.random()*number)
   
}



