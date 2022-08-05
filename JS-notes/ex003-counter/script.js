function contar(){
    let inicio = window.document.getElementById('inicio').value
    let fim = window.document.querySelector('#fim').value
    let passo = window.document.getElementById('passo').value
    let res = window.document.getElementById('res')
    
    resultado = []
    if (passo.length == 0 || fim.length == 0 || inicio.length == 0){
        alert("[ERRO] Faltam dados!")
        
    } 

    while(inicio<=fim){

        resultado.push(inicio)
        inicio = parseInt(inicio) + parseInt(passo)
        
    }
    console.log(resultado)
    res.innerHTML = resultado
    
    
    
    
}   