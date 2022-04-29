<script setup lang="ts">
const props = defineProps<{
  data: {
    key: string,
    value: string | number,
    id: string
  },
  isSelect: boolean
}>();
</script>

<template>
  <section>
    <div 
      class="text-cyan-4 text-center rounded"
      :class="props.isSelect ? 'bg-primary' : 'bg-cyan-1'">
      {{ props.data.key }}
    </div>
  </section>
</template>