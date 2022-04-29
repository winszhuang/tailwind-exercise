<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
import img from '../assets/icon-person.svg';

const data = ref('');
</script>

<template>
  <section>
    <h3 class=" text-cyan-2 mb-1">
      Number of People
    </h3>
    <Input
      :placeholder="'number'" 
      :prefix-img="img"
      v-model:value="data"
    />
  </section>
</template>