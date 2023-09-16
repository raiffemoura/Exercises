let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL";

function converter() {
  var input = document.getElementById("valor");
  var valor = input.value;
  console.log(valor);

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let rate = data.USDBRL.bid * valor;
      // console.log(rate);
      document.getElementById(
        "resultado"
      ).innerHTML = `${valor} dolares é igual a R$${rate.toFixed(2)}`;
    });
  // .then((data) => {
  //   console.log(data);
  //   let rate = data.rates.BRL;

  //   let resultado = `${valor} dolares = ${rate * valor} em reais.`;
  //   document.getElementById("resultado").innerHTML = resultado;
  // });
}
