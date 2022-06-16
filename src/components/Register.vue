<script setup>
import { ref } from "vue";
import BasePrimaryButton from "./base/BasePrimaryButton.vue";
import Icon from "./Icon.vue";
import BaseTextButton from "./base/BaseTextButton.vue";

import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import axios from "axios";
import router from "../router";

const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Login User request here
  submitted.value = true;

  var data = JSON.stringify({
    password: formData.value["password"],
    contacts: [
      {
        name: formData.value["name"],
        email: formData.value["email"],
        phone: {
          indicative: "57",
          number: formData.value["phone"],
        },
      },
    ],
  });

  var config = {
    method: "post",
    url: "https://portal-millonario.free.beeceptor.com/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.status == 200) {
        createToast(
          {
            title: "Usuario Creado Correctamente",
            description: "¡Ya puedes empezar a descubrir nuestros cursos!",
          },
          {
            showIcon: "true",
            hideProgressBar: "true",
            type: "success",
            transition: "slide",
            position: "top-right",
            timeout: 5000,
            toastBackgroundColor: "#36D399",
          }
        );
        // TODO: Save user data in vue store
        // Save response info to localstorage
        localStorage.setItem("user", JSON.stringify(response.data));
        closeRegistrationModal();
        // this.$router.push({ path: "/" });
      }
    })
    .catch(function (error) {
      createToast(
        {
          title: "Error",
          description: "Hubo un error al momento de crear la cuenta.",
        },
        {
          showIcon: "true",
          hideProgressBar: "true",
          type: "error",
          transition: "slide",
          position: "top-right",
          timeout: 5000,
          toastBackgroundColor: "#F87272",
        }
      );
    });
};

const closeRegistrationModal = () => {
  document.getElementById("registration-modal").classList.remove("modal-open");
};

const openLoginModal = () => {
  closeRegistrationModal();
  document.getElementById("login-modal").classList.add("modal-open");
};
</script>

<template>
  <!-- <img class="absolute h-screen top-0 right-0" src="../assets/bg_hero.png"> -->

  <!-- <div class="my-auto pr-20 w-9/12">
        <h1 class="md:text-5xl text-2xl text-success font-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
        <BaseTextButton link="/" label="Conocer a los fundadores" />

      </div> -->
  <!-- <pre class="text-white" wrap>{{ formData }}</pre> -->

  <div
    class="h-screen md:h-full md:my-auto md:px-16 px-6 py-8 content-center bg-gradient-to-tr from-black/95 to-[#090617] md:rounded-xl md:border md:border-base-100/20 text-base-100 shadow-xl"
  >
    <div class="flex justify-start pb-6 cursor-pointer">
      <label @click="closeRegistrationModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-x-lg w-6 h-6 text-base-100 hover:text-success"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </label>
    </div>
    <FormKit
      :actions="false"
      type="form"
      v-model="formData"
      :form-class="submitted ? 'hide' : 'show'"
      @submit="submitHandler"
    >
      <h1 class="mb-6 text-base-100 text-2xl font-black">
        Crear una nueva cuenta
      </h1>
      <FormKit
        type="text"
        name="name"
        placeholder="Nombre completo"
        validation="required"
        :validation-messages="{
          required: 'El nombre es requerido.',
        }"
        :classes="{
          outer: 'mb-3',
          inner: 'bg-[#292E36]/30 rounded-xl mb-1',
          input:
            'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
          validation: 'text-blue-300',
        }"
      />
      <FormKit
        type="text"
        name="email"
        placeholder="Correo electrónico"
        validation="required|email"
        :validation-messages="{
          required: 'El correo eléctronico es requerido.',
          email: 'Correo electrónico invalido.',
        }"
        :classes="{
          outer: 'mb-3',
          inner: 'bg-[#292E36]/30 rounded-xl mb-1',
          input:
            'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
          validation: 'text-blue-300',
        }"
      />
      <FormKit
        type="password"
        name="password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Por favor, incluya al menos un símbolo',
          required: 'La contraseña es requerida',
          length: 'La contraseña debe tener mínimo 6 carácteres.',
        }"
        placeholder="Contraseña"
        :classes="{
          outer: 'mb-3',
          inner: 'bg-[#292E36]/30 rounded-xl mb-1',
          input:
            'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
          validation: 'text-blue-300',
        }"
      />
      <FormKit
        type="password"
        name="password_confirm"
        placeholder="Confirme contraseña"
        validation="required|confirm"
        :validation-messages="{
          required: 'La contraseña es requerida',
          confirm: 'Las contraseñas deben coincidir.',
        }"
        :classes="{
          outer: 'mb-3',
          inner: 'bg-[#292E36]/30 rounded-xl mb-1',
          input:
            'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
          validation: 'text-blue-300',
        }"
      />
      <div class="form-control mb-3">
        <label class="label cursor-pointer">
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary mr-4"
          />
          <span class="text-base-100 text-md"
            >Estoy de acuerdo con los
            <a class="text-success hover:text-success hover:underline" href="#"
              >terminos y condiciones.</a
            ></span
          >
        </label>
      </div>
      <!-- todo: Disable button when sending request (create new user) -->
      <BasePrimaryButton label="Crear cuenta" />
      <span class="flex justify-center text-base-100 text-sm py-2"
        >¿Ya tienes una cuenta?&nbsp;
        <a
          @click="openLoginModal"
          class="text-success hover:text-success hover:underline"
          >Iniciar sesión</a
        ></span
      >
      {{ formData }}
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>
