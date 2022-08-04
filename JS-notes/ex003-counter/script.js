function contar(){
    var inicio = window.document.getElementById('inicio').value
    var fim = window.document.querySelector('#fim').value
    var passo = window.document.getElementById('passo').value
    var res = window.document.getElementById('res')
    
    resultado = []
    if (passo.length == 0 || fim.length == 0 || inicio.length == 0){
        alert("[ERRO] Faltam dados!")
        
    } 

    while(inicio<=fim){

        resultado.push(inicio )
        inicio = parseInt(inicio) + parseInt(passo)
        
    }
    console.log(resultado)
    res.innerHTML = resultado
    
    
    
    
}   