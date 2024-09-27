<script setup>
  import { ref } from 'vue'
  import { useCounterStore } from "@/stores/counter";
  const counterStore = useCounterStore();
  const counter = ref(0);
  function add() {
    counter.value++
  }

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>contador: {{ counterStore.count }}</h2>
    <h2>dobro: {{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment" >+</button>
    <h2>contador: {{ counter }}</h2>
    <button @click="add()">+</button>
  </div>
</template>

<style>

</style>
