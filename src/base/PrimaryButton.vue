<template lang="">
  <button class="disbled btn w-full text-neutral bg-success hover:bg-success/80">{{label}}</button>
</template>
<script>
export default {
  props: {
    label: String,
    loading: Boolean
  }
  
}
</script>
<style lang="">
  
</style>