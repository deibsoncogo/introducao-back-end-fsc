// import * as productAll from "./product.js"
import product, { createProduct, Product } from "./product.js"
import lodash from "lodash"

const product1 = createProduct(1, "Notebook", product.price)
const product2 = new Product(2, "Celular", 1500)

console.log("product1 =>", product1.getInfo())
console.log("product2 =>", product2.getInfo())

lodash.filter()
