<template lang="">
  <button
    :class="
      (loading && 'loading ') +
      ' btn w-full h-[50px] text-neutral normal-case bg-success hover:bg-success/80'
    "
  >
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    label: String,
    loading: Boolean,
  },
};
</script>
<style lang=""></style>
