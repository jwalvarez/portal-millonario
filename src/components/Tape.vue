<template>
  <ul class="relative flex bg-gradient-to-tr bg-primary/80 py-6 -top-20" id="example-2">
    <li class="flex justify-between mx-auto" v-for="(item, index) in topics" :key="index">
      <span class="text-[#2A303C]/50 md:text-2xl text-xs font-black">{{ item }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Tape",
  data() {
    return {
      mensajePadre: 'Padre',
      topics: ['COINBASE', 'BINANCE', 'GOARBIT', 'BITCOIN']
    }
  }
}
</script>

<style lang="">
  
</style>