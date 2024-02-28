const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject([{ message: "Nenhum produto cadastrado" }])
    }, 3000)
  })
}

const loadCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: "1", name: "Notebook" }])
    }, 3000)
  })
}

const loadUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: "1", name: "Marcos Silva", age: 29 }])
    }, 3000)
  })
}

// não vai retornar nada se um erro acontecer
const [products, categories, users] = await Promise.all([
  loadProducts(), loadCategories(), loadUsers(),
])

console.log("products =>", products)
console.log("categories =>", categories)
console.log("users =>", users)

// vai realizado o retorno
const results = await Promise.allSettled([
  loadProducts(), loadCategories(), loadUsers(),
])

console.log("results =>", results)
