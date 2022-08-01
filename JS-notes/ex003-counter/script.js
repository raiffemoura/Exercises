function contar(){
    var inicio = window.document.getElementById('inicio').value
    var fim = window.document.querySelector('#fim').value
    var passo = window.document.getElementById('passo').value
    var res = window.document.getElementById('res')
    
    resultado = []
    while(inicio<=fim){

        resultado.push(inicio )
        inicio = parseInt(inicio) + parseInt(passo)
    }
    console.log(resultado)
    res.innerHTML = resultado
}   