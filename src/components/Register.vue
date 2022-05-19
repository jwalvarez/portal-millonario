<script setup>
import { ref } from 'vue'
import PrimaryButton from '../base/PrimaryButton.vue';
import Icon from './Icon.vue';
import TextButton from '../base/TextButton.vue'

import axios from 'axios'

const submitted = ref(false)
const namm = ref("asldjasljdlaksj")
const formData = ref({})
const icons = ref("")
const submitHandler = async () => {
  // Login User request here
  await new Promise((r) => setTimeout(r, 1000))
  console.log(formData["full_name"])
  submitted.value = true

  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
    console.log(result.data);
  })

  var data = JSON.stringify({
    "full_name": "Titulo video 1",
    "email": "jwalvarez@gmail.com",
    "password": "trading",
    "contacts": [
      {
        "first_name": "Marcos",
        "last_name": "Castillo",
        "email": "jwalvarez@gmail.com",
        "phone": {
          "indicative": "57",
          "number": "3006003345",
          "extension": "132"
        }
      }
    ],
    "referred_users": [
      "31",
      "42",
      "98"
    ]
  });

  var config = {
    method: 'post',
    url: 'https://portal-millonario.free.beeceptor.com/users',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

</script>

<template>
  <div class="absolute md:px-[20%] px-4 h-screen top-0">

    <img class="absolute h-screen top-0 right-0" src="../assets/bg_hero.png">

    <div class="relative md:flex block h-full">
      <div class="my-auto pr-20 w-9/12">
        <h1 class="md:text-5xl text-3xl text-success font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <div class="flex my-8">
          <div class="avatar-group -space-x-6">
            <div class="avatar">
              <div class="md:w-12 w-6">
                <img src="https://api.lorem.space/image/face?hash=4818" />
              </div>
            </div>
            <div class="avatar">
              <div class="md:w-12 w-6">
                <img src="https://api.lorem.space/image/face?hash=40311" />
              </div>
            </div>
            <div class="avatar">
              <div class="md:w-12 w-6">
                <img src="https://api.lorem.space/image/face?hash=84348" />
              </div>
            </div>
            <div class="avatar placeholder">
              <div class="md:w-12 w-6 bg-neutral-focus text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
          <span class="text-base-100 text-md mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
        <TextButton link="/" label="Conocer a los fundadores" />

        <pre class="text-white" wrap>{{ formData }}</pre>
      </div>

      <div
        class="my-auto px-16 py-8 content-center bg-accent/90 rounded-xl border border-base-100/20 text-base-100 shadow-xl">
        <FormKit :actions="false" type="form" v-model="formData" :form-class="submitted ? 'hide' : 'show'"
          @submit="submitHandler">
          <h1 class="mb-6 text-base-100 text-3xl font-black">Crear una nueva cuenta</h1>
          <FormKit type="text" name="name" placeholder="Nombre completo" validation="required" :validation-messages="{
            required: 'El nombre es requerido.',
          }" :classes="{
  outer: 'mb-3',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
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
          <FormKit type="password" name="password_confirm" placeholder="Confirme contraseña"
            validation="required|confirm" :validation-messages="{
              required: 'La contraseña es requerida',
              confirm: 'Las contraseñas deben coincidir.'
            }" :classes="{
  outer: 'mb-3',
  inner: 'bg-[#292E36]/30 rounded-xl mb-1',
  input: 'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
  validation: 'text-blue-300'
}" />
          <div class="form-control mb-3">
            <label class="label cursor-pointer">
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary mr-4" />
              <span class="text-base-100 text-md">Estoy de acuerdo con los <a
                  class="text-success hover:text-success hover:underline" href="#">terminos y
                  condiciones.</a></span>
            </label>
          </div>
          <!-- todo: Disable button when sending request (create new user) -->
          <PrimaryButton label="Crear cuenta" />
          <span class="flex justify-center text-base-100 text-xs py-2">¿Ya tienes una cuenta?&nbsp;<a
              class="text-success hover:text-success hover:underline" href="/login">Iniciar sesión</a></span>
        </FormKit>
        <div v-if="submitted">
          <h2>Submission successful!</h2>
        </div>
      </div>
    </div>
  </div>
</template>