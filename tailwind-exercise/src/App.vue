<script setup lang="ts">
import BillInput from './components/BillInput.vue';
import SelectTip from './components/SelectTip.vue';
import NumberOfPeople from './components/NumberOfPeople.vue';
import ShowNum from './components/ShowNum.vue';
</script>

<template>
  <div class="bg-cyan-4 h-screen flex justify-center items-center font-mono">
    <main>
      <img src="./assets/logo.svg" alt="" class="m-auto">

      <!-- 主要區塊 -->
      <div class="mt-16 flex justify-center p-7 bg-white rounded-xl">
        <!-- 左邊計算區 -->
        <div class="mr-6 min-w-[300px]">
          <BillInput class="mb-7"/>
          <SelectTip class="mb-7"/>
          <NumberOfPeople class=""/>
        </div>
        <!-- 右邊結帳區 -->
        <div class=" bg-cyan-1 rounded-xl p-5 min-w-[300px] flex flex-col">
          <ShowNum 
            :number="4.27"
            :title="'Tip Amount'"
            :subtitle="'/ person'"
            class="mb-7"
          />
          <ShowNum 
            :number="32.79"
            :title="'Total'"
            :subtitle="'/ person'"
          />
          <button class="mt-auto w-full bg-primary text-cyan-1 rounded py-2">
            RESET
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
