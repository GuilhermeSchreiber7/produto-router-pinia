import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Harry porra', price: 234.9, qty: 100 },
    { id: 2, name: 'Bussy', price: 24.9, qty: 69 },
    { id: 3, name: 'DIckson', price: 6.9, qty: 20 },
    { id: 4, name: 'Amem', price: 0.99, qty: 500 },
    { id: 5, name: 'Pikachu', price: 69.69, qty: 1 },
    { id: 6, name: 'Pikachu', price: 69.69, qty: 1 }
  ])

  function getProductById(id) {
    // for (let product of product.value) {
    //   if (product.id == id) {
    //     return product
    //   }
    // }
    // return null
    return products.value.find((product) => product.id == id)
  }
  function deleteProductById(id) {
    const index = products.value.findIndex((product) => product.id == id)
    products.value.splice(index, 1)
  }
  return { products, getProductById, deleteProductById }
})

