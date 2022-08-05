function tabuada(){
    let num = document.getElementById("num")
    let tab = document.getElementById("seltab")
    
    if(num.value.length == 0){
        window.alert("[ERRO] Digite um numero!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }


}