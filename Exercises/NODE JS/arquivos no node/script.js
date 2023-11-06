let fs = require("fs");

//          --- CRIA UM ARQUIVO E SOBRESCREVE ELE CASO JA TENHA ALGO. ---

// fs.writeFile("teste.txt", "Hello World", function (error) {
//   if (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log("Arquivo criado com sucesso");
// });

//        --- CASO JA EXISTE, VAI DAR UM APPEND NO ARQUIVO, OU CRIA UM NOVO ARQUIVO ---

// fs.appendFile("teste2.txt", " - Olá Mundo", function (error) {
//   if (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log("Arquivo atualizado com sucesso");
// });

//              --- APAGA UM ARQUIVO ---

// fs.unlink("teste2.txt", function (error) {
//   if (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log("Arquivo apagado com sucesso");
// });

//               --- RENOMEIA UM ARQUIVO ---

// fs.rename("teste.txt", "NovoNome.txt", function (error) {
//   if (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log("Arquivo renomeado com sucesso");
// });

//              --- LER UM ARQUIVO ---

// fs.readFile("NovoNome.txt", "utf8", function (error, data) {
//   if (error) {
//     console.log(`Error: ${error}`);
//   }
//   console.log(data);
// });

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    throw error;
  }
  fs.writeFile(fileName + "_Uppercase.txt", data.toUpperCase(), (error) => {
    if (error) {
      throw error;
    }
    console.log("Arquivo gerado com sucesso");
  });
});
