const path = require("path")

console.log("__filename =>", __filename)
console.log("__dirname =>", __dirname)

console.log("Nome do arquivo =>", path.basename(__filename))
console.log("Extensão do arquivo =>", path.extname(__filename))
