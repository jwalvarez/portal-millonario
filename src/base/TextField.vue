<template lang="">
  <div class="w-full">
    <div class="form-control">
      <input :type="type" :placeholder="placeHolder" class="my-1 input h-10 input-bordered border-[#4A4A4A] rounded-2xl w-full bg-[#292E36]/30 text-base-100" />
      <!-- <label class="label">
        <span class="label-text-alt text-red-500">{{altLabel}}</span>
      </label> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    placeHolder: String,
    altLabel: String,
    type:{
        type: String,
        default: 'text'
      }
  },
  data() {
    return {
      name: "laksjdlksj"
    }
  },
  
}
</script>
<style lang="">
  
</style>