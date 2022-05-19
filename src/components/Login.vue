<script setup>
import { ref } from 'vue'
import PrimaryButton from '../base/PrimaryButton.vue';
const submitted = ref(false)
const formData = ref({})
const submitHandler = async () => {
  // Create User request here
  await new Promise((r) => setTimeout(r, 1000))
  console.log(formData)
  submitted.value = true
}
</script>

<template>
  <div class="w-4/12 mx-auto my-2 p-10 content-center bg-accent/90 rounded-xl text-base-100 shadow-xl">

    <FormKit :actions="false" type="form" v-model="formData" :form-class="submitted ? 'hide' : 'show'"
      @submit="submitHandler">
      <h1 class="mb-10 text-base-100 text-3xl font-black">Crear una nueva cuenta</h1>

      <FormKit type="text" name="name" placeholder="Nombre completo" validation="required" :validation-messages="{
        required: 'El nombre es requerido.',
      }" :classes="{
  outer: 'mb-5',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-10 px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
      <FormKit type="text" name="email" placeholder="Correo electrónico" validation="required|email"
        :validation-messages="{
          required: 'El correo eléctronico es requerido.',
          email: 'Correo electrónico invalido.',
        }" :classes="{
  outer: 'mb-5',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-10 px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
      <FormKit type="password" name="password" validation="required|length:6|matches:/[^a-zA-Z]/" :validation-messages="{
        matches: 'Por favor, incluya al menos un símbolo',
        required: 'La contraseña es requerida',
        length: 'La contraseña debe tener mínimo 6 carácteres.'
      }" placeholder="Contraseña" :classes="{
  outer: 'mb-5',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-10 px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
      <FormKit type="password" name="password_confirm" placeholder="Confirme contraseña" validation="required|confirm"
        :validation-messages="{
          required: 'La contraseña es requerida',
          confirm: 'Las contraseñas deben coincidir.'
        }" :classes="{
  outer: 'mb-5',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-10 px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
      <div class="form-control mb-4">
        <label class="label cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox checkbox-primary mr-4" />
          <span class="text-base-100 text-md">Estoy de acuerdo con los <a
              class="text-success hover:text-success hover:underline" href="">terminos y
              condiciones.</a></span>
        </label>
      </div>
      <!-- todo: Disable button when sending request (create new user) -->
      <PrimaryButton label="Crear cuenta" />
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
    <pre wrap>{{ formData }}</pre>
  </div>
</template>