const path = require('path')

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretorio atual
console.log(path.dirname(__filename));

// Extencao do arquivo
console.log(path.extname(__filename));

//Criar objeto path
console.log(path.parse(__filename));

// Juntar caminho de arquivos
console.log(path.join(__dirname,"test","test.html"));
