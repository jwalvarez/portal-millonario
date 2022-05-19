<script setup>
import { ref } from 'vue'
import PrimaryButton from '../base/PrimaryButton.vue';
import Icon from './Icon.vue';

const submitted = ref(false)
const namm = ref("asldjasljdlaksj")
const icons = ref("")
const formData = ref({})
const submitHandler = async () => {
  // Login User request here
  await new Promise((r) => setTimeout(r, 1000))
  console.log(formData)
  submitted.value = true
}

</script>

<template>
  <div class="flex w-full h-auto px-48 py-6">
    <div class="my-auto w-9/12">
      <h1 class="text-5xl text-success font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <div class="flex my-8">
        <div class="avatar-group -space-x-6">
          <div class="avatar">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=4818" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=40311" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="https://api.lorem.space/image/face?hash=84348" />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
        <span class="text-base-100 text-md mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

      <div class="flex mt-6">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
      <pre class="text-white" wrap>{{ formData }}</pre>
    </div>

    <div
      class="my-2 px-16 py-8 content-center bg-accent/80 rounded-xl border border-base-100/20 text-base-100 shadow-xl">
      <FormKit :actions="false" type="form" v-model="formData" :form-class="submitted ? 'hide' : 'show'"
        @submit="submitHandler">
        <h1 class="mb-6 text-base-100 text-3xl font-black">Iniciar sesión</h1>
        <FormKit type="text" name="email" placeholder="Correo electrónico" validation="required|email"
          :validation-messages="{
            required: 'El correo eléctronico es requerido.',
            email: 'Correo electrónico invalido.',
          }" :classes="{
  outer: 'mb-3',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
        <FormKit type="password" name="password" validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Por favor, incluya al menos un símbolo',
            required: 'La contraseña es requerida',
            length: 'La contraseña debe tener mínimo 6 carácteres.'
          }" placeholder="Contraseña" :classes="{
  outer: 'mb-3',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
        <div class="form-control mb-3">
          <label class="label cursor-pointer">
            <span class="text-base-100 text-md">¿Olvidaste tu contraseña? <a
                class="text-success hover:text-success hover:underline" href="#">Recuperar contraseña</a></span>
          </label>
        </div>
        <!-- todo: Disable button when sending request (login user) -->
        <PrimaryButton label="Iniciar sesión" />
        <span class="flex justify-center text-base-100 text-xs py-2">¿No tienes una cuenta?&nbsp;<a
            class="text-success hover:text-success hover:underline" href="/register">Crear una nueva cuenta</a></span>
      </FormKit>
      <div v-if="submitted">
        <h2>Submission successful!</h2>
      </div>
    </div>
  </div>

</template>