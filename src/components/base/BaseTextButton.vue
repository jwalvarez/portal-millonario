<template lang="">
  <div className="relative z-50 w-full py-3 text-white">
    <a className="text-md font-medium text-success hover:underline" :href=link>
      {{label}} &rarr;
    </a>
  </div>
  <!-- <button :class="`disbled rounded-${radius} btn w-1/2 text-success bg-transparent border border-success`">{{label}}</button> -->
</template>
<script>
export default {
  props: {
    label: String,
    loading: Boolean,
    radius: String,
    link: String
  }
}
</script>