// Carne - 400g por pessoa // + de 6 horas - 650g
// Cerveja - 1200ml por pessoa // + de 6 horas - 2000ml
// Refrigerante/Água - 1000ml por pessoa // + de 6 horas 1500ml
// Crianças valem por 0,5 do consumo de um adulto


function calc() {

    let adu = document.querySelector(".adulto").value
    let cri = document.querySelector(".crianca").value
    let horas = document.querySelector(".horas").value
    let res = document.querySelector(".res")

    if (adu.length == 0 || cri.length == 0 || horas.length == 0) {
        alert("Por favor, preencha todos os campos!")
    } else {
        
        var carne = adu * 0.4 + cri * 0.2
        var cerveja = adu * 1.2 
        var refri = adu * 1 + cri * 0.5
        if (horas <= 6) {

            res.innerHTML = `Você vai precisar de ${carne.toFixed(3)}g de carne e ${cerveja.toFixed(1)}L de cerveja e 
                        ${refri.toFixed(1)}L de refrigerente e água.`

        } else {
        
        var carne = adu * 0.650 + cri * 0.325
        var cerveja = adu * 2 
        var refri = adu * 1.5 + cri * 0.750

        res.innerHTML = `Você vai precisar de ${carne.toFixed(3)}g de carne e ${cerveja.toFixed(1)}L de cerveja e 
                        ${refri.toFixed(1)}L de refrigerente e água.`
        }
    }
}
