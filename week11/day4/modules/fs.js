const fs = require("fs");
const path = require("path");

//criar uma pasta
//  

// criar um arquivo
fs.writeFileSync(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso");
  }
);
//Adicionar a um arquivo
fs.appendFile(path.join(__dirname,'./test', 'test.txt'), 'hello world', (error)=> {
    if (error) {
      return  console.log('Erro: ', error)
    }

    console.log('Arquivo modificado com sucesso');
})

// Ler arquivo
fs.readFile(path.join(__dirname,'./test', 'test.txt'), 'utf8', (error,data)=>{
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log(data);
})