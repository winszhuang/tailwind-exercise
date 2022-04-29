<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
import img from '../assets/icon-dollar.svg';

const data = ref('');
</script>

<template>
  <section>
    <h3 class=" text-cyan-2 mb-1">
      Bill
    </h3>
    <Input 
      :placeholder="'price'" 
      :prefix-img="img"
      v-model:value="data"
    />
  </section>
</template>