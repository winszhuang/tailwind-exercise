<script setup lang="ts">
const props = defineProps<{
  number: number,
  title: string,
  subtitle: string
}>();
</script>

<template>
  <div class="flex justify-between">
    <div class=" text-cyan-4 text-xs">
      <h6 class=" ">
        {{ props.title }}
      </h6>
      <span class="text-cyan-3">
        {{ props.subtitle }}
      </span>
    </div>

    <div class="text-3xl text-primary">
      {{ `$${props.number}` }}
    </div>
  </div>
</template>