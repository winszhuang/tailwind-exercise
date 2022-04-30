<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  placeholder: string,
  prefixImg: string
}>();

const emit = defineEmits(['update:value'])

const value = ref('');
watch(value, () => {
  emit('update:value', value.value)
});

</script>

<template>
  <label class="relative block">
    <span 
      class="absolute inset-y-0 left-0 flex items-center pl-3"
    >
      <img :src="props.prefixImg" alt="">
    </span>
    <input 
      class="text-cyan-1 text-right block bg-cyan-5 w-full rounded py-2 pl- pr-3 sm:text-sm" 
      :placeholder="props.placeholder" 
      type="text"
      v-model="value"
    />
  </label>
</template>