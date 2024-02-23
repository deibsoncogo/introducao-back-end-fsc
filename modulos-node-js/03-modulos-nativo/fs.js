const path = require("path")
const fs = require("fs")

fs.mkdir(path.join(__dirname, "folder"), (error) => {
  console.error("error =>", error)
})

const pathFile = path.join(__dirname, "folder", "file.txt")

fs.writeFile(pathFile, "Hello world", (error) => {
  console.error("error =>", error)
})

fs.appendFile(pathFile, "\nFrom FSC", (error) => {
  console.error("error =>", error)
})

fs.readFile(pathFile, "utf-8", (error, data) => {
  error ? console.error("error =>", error) : console.log("data =>", data)
})
