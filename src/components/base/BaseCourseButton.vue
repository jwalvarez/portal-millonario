<template lang="">
  <button class="disbled btn w-full hover:text-accent normal-case text-base-100 bg-base-100/5 hover:bg-success">{{label}}</button>
</template>
<script>
export default {
  props: {
    label: String,
    loading: Boolean
  }

}
</script>