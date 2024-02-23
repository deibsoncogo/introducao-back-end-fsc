export class Product {
  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }

  getInfo() {
    return `ID: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`
  }
}

export function createProduct(id, name, price) {
  return new Product(id, name, price)
}

const price = 1200

export default { price: price }
