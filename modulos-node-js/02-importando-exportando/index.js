const { createProduct, Product, productPrice } = require("./product")
require("./hello")

const product1 = createProduct(1, "Notebook", productPrice)
const product2 = new Product(2, "Celular", 1500)

console.log("product1 =>", product1.getInfo())
console.log("product2 =>", product2.getInfo())
