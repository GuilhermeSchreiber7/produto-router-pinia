<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
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
        <div class="image">
          <img src="@/assets/images/download.webp" alt="" />
        </div>
        <td>
          <button @click="view(product.id)">VER</button>
          <button @click="productStore.deleteProductById(product.id)">Excluir</button>
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
p {
  background-color: #000000;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: inicio 5s infinite;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #000000;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
img {
  width: 300px;
  border-radius: 3000px;
  animation: pularGirar 3s infinite;
  animation: moverSumir 5s linear infinite;
}
/* @keyframes moverSumir {
    0% {
        transform: translateX(-100%);
        transform: perspective(100px) rotateY(0deg);
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: translateX(50vw);
        transform: perspective(100px) rotateY(180deg);
        transform: scale(5);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        transform: perspective(100px) rotateY(360deg);
        transform: scale(1);
        opacity: 0;
    }
}

@keyframes inicio {
  0% {
    transform: translate(0) rotate(0deg);
  }
  25% {
    transform: translate(100px, 50px) rotate(90deg);
  }
  50% {
    transform: translate(200px, 0) rotate(180deg);
  }
  75% {
    transform: translate(100px, -50px) rotate(270deg);
  }
  100% {
    transform: translate(0) rotate(360deg);
  }
} */
@keyframes animaçãoAbsurd {
    0% {
        transform: translate(-100%, -100%) scale(1) rotate(0deg);
        opacity: 1;
    }
    25% {
        transform: translate(50vw, 50vh) scale(1.5) rotate(90deg);
        opacity: 1;
    }
    50% {
        transform: translate(100%, -100%) scale(1) rotate(180deg);
        opacity: 0.7;
    }
    75% {
        transform: translate(50vw, 50vh) scale(2) rotate(270deg);
        opacity: 0.5;
    }
    100% {
        transform: translate(-100%, 100%) scale(1) rotate(360deg);
        opacity: 1;
    }
}

.image img {
    animation: animaçãoAbsurd 4s ease-in-out infinite;
}
</style>
