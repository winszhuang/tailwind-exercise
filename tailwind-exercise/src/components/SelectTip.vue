<script setup lang="ts">
import { ref } from 'vue';
import Tip from './Tip.vue';

interface Tip {
  key: string,
  value: string | number,
  id: string
}

const currentTip = ref<Tip>();

const tips: Tip[] = [
  {
    key: '5%',
    value: 5,
    id: '864864'
  },
  {
    key: '10%',
    value: 10,
    id: 'rthtrh'
  },
  {
    key: '15%',
    value: 15,
    id: '486r4g'
  },
  {
    key: '25%',
    value: 25,
    id: '14864te'
  },
  {
    key: '50%',
    value: 50,
    id: '4rerhr'
  },
  {
    key: 'Custom',
    value: 50,
    id: '471eerb'
  },
];

const isSelect = (item: Tip) => item.id === currentTip.value?.id;

</script>

<template>
  <section>
    <h3 class=" text-cyan-2 mb-1">
      Select Tip %
    </h3>
    <div class="flex flex-row flex-wrap col-gap-2 col-gap-4">
      <template 
        v-for="item in tips" 
        :key="item.id"
      >
        <Tip 
          :data="item"
          :isSelect="isSelect(item)"
          class="md:basis-1/3 basis-1/2"
          @click="currentTip = item"/>
      </template>
    </div>
  </section>
</template>