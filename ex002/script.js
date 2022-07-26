function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
        if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //crianca
                img.setAttribute('src', './assets/menino.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-homem.png' )
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './assets/homem.png')
            } else if (idade <110) {
                //idoso
                img.setAttribute('src', './assets/idoso.png')
            } else {
                // mumia
                img.setAttribute('src', './assets/mumia.jpg')
                img.setAttribute('width', '250px')
                img.style.borderRadius = '50%'

            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //crianca
                img.setAttribute('src', './assets/menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-mulher.png' )
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './assets/mulher.png')
            } else if (idade <110) {
                //idosa
                img.setAttribute('src', './assets/idosa.png')
            } else {
                // mumia
                img.setAttribute('src', './assets/mumia.jpg')
                img.setAttribute('width', '250px')
                img.style.borderRadius = '50%'

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign ='center'
        res.appendChild(img)
    }
}