let url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=7476da86ad6eeb49ef3186f3a64fd0d9&base=USD&symbols=BRL";

function converter() {
  let input = document.getElementById("valor");
  let valor = input.value;
  console.log(valor);

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let rate = data.rates.BRL;

      let resultado = `${valor} dolares = ${rate * valor} em reais.`;
      document.getElementById("resultado").innerHTML = resultado;
    });
}
