<script setup>
  import { useRouter } from "vue-router";
  import { useProductStore } from "@/stores/product";
  const productStore = useProductStore()
  const router = useRouter()

  function view(id) {
    router.push(`/product/${id}`)
  }
</script>

<template>
  <h1>Listagem de produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><p>Em breve</p></td>
      <img src="@/assets/images/download.webp" alt="">
      <td>
        <button @click="view(product.id)">VER</button>
      </td>
      </tr>

    </tbody>
  </table>
</template>
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  p{
    background-color: #000000;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  img {
            width: 150px; 
            animation: pularGirar 2s infinite;
        }

        @keyframes pularGirar {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            25% {
                transform: translateY(-30px) rotate(90deg);
            }
            50% {
                transform: translateY(0) rotate(180deg);
            }
            75% {
                transform: translateY(-15px) rotate(270deg);
            }
            100% {
                transform: translateY(0) rotate(360deg);
            }
        }
</style>
