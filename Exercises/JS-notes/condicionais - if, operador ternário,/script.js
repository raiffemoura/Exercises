var idade = 18

/*if ( idade >= 18 && idade <= 70){
    console.log("Você é maior de idade.")
    console.log("Qual o seu pedido?")
}

else{
    console.log("Sua idade é menor que 18 ou maior que 70.")
    console.log("Não pode comprar bebida alcoólica.")
    
}*/


/*if (idade < 18 || idade > 70){
    console.log("Sua idade é menor que 18 ou maior que 70.")
    console.log("Não pode comprar bebida alcoólica.")
}
else{
    console.log("Você é maior de idade.")
    console.log("Qual o seu pedido?")
}*/

var pode = idade >= 18 ? "Maior de idade, pode comprar bebidas alcoólicas." : "Não pode comprar bebidas alcoólicas.";
console.log(pode)