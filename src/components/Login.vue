<script setup>
import { ref } from 'vue'
import BasePrimaryButton from './base/BasePrimaryButton.vue';
import Icon from './Icon.vue';
import BaseTextButton from './base/BaseTextButton.vue'

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

const closeLoginModal = () => {
  document.getElementById("login-modal").classList.remove("modal-open");
}

const openRegistrationModal = () => {
  closeLoginModal()
  document.getElementById("registration-modal").classList.add("modal-open");
}

</script>

<template>
  <div
    class="h-screen md:h-full md:my-auto md:px-16 px-6 py-8 content-center bg-gradient-to-tr from-black/95 to-[#090617] md:rounded-xl md:border md:border-base-100/20 text-base-100 shadow-xl">
    <div class="flex justify-start pb-6 cursor-pointer">
      <label @click="closeLoginModal" for="my-modal-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          class="bi bi-x-lg w-6 h-6 text-base-100 hover:text-success" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
      </label>
    </div>
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
      <FormKit type="password" name="password" validation="required|length:6|matches:/[^a-zA-Z]/" :validation-messages="{
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
          <span class="text-base-100 text-md">¿No recuerdas la contraseña? <a
              class="text-success hover:text-success hover:underline" href="#">Recuperar contraseña.</a></span>
        </label>
      </div>
      <!-- todo: Disable button when sending request (create new user) -->
      <BasePrimaryButton label="Iniciar sesión" />
      <span class="flex justify-center text-base-100 text-sm py-2">¿No tienes una cuenta?&nbsp;
        <a @click="openRegistrationModal" class="text-success hover:text-success hover:underline">Crear
          cuenta</a></span>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>
