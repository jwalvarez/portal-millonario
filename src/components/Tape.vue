<template>
    <ul class="relative flex bg-[#00D49B] py-6 px-16 -top-32" id="example-2">
      <li class="flex justify-between mx-auto" v-for="(item, index) in topics" :key="index">
        <span class="text-[#2A303C]/50 text-2xl font-black">{{item}}</span>
      </li>
    </ul>
</template>
<script>
export default {
  name: "Tape",
  data() {
    return {
      mensajePadre: 'Padre',
      topics: ['COINBASE','BINANCE', 'GOARBIT', 'BITCOIN']
    }
  }
}
</script>

<style lang="">
  
</style>