<template>
  <ul
    class="flex bg-gradient-to-l from-transparent via-primary/60 to-transparent py-8 px-[10%]"
    id="example-2"
  >
    <li
      class="flex justify-between mx-auto"
      v-for="(item, index) in topics"
      :key="index"
    >
      <span class="text-base-100/40 md:text-2xl text-xs font-inter-black">{{
        item
      }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Tape",
  data() {
    return {
      mensajePadre: "Padre",
      topics: ["COINBASE", "BINANCE", "GOARBIT", "BITCOIN"],
    };
  },
};
</script>

<style lang=""></style>
