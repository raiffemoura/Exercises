//Normal

function dobro(x) {
    console.log(2 * x)
}

dobro(5)
// Função anonima


let triplo = function (x) {
    console.log(3 * x)
}

triplo(5)

// Arrow Function

let arrowDobro = x => {
    console.log(2 * x);
}

arrowDobro(8)

let arrowTriplo = x => 3 * x;

console.log(arrowTriplo(10));


// Arrow funciontao nao entende bem o This e nao funciona com o Bind