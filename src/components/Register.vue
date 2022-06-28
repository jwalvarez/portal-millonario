<script setup>
import { ref } from "vue";
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import BasePrimaryButton from "./base/BasePrimaryButton.vue";

import { useUserStore } from "../stores/user";
import { useAuthStore } from "../stores/auth";

const userStore = useUserStore();
const authStore = useAuthStore();

const submitted = ref(false);
const acceptedTermsAndConditions = ref(true);
const formData = ref({});
const submitHandler = async () => {
  // Login User request here
  submitted.value = true;

  var data = JSON.stringify({
    first_name: formData.value["name"],
    last_name: formData.value["lastname"],
    username: formData.value["username"],
    password: formData.value["password"],
  });

  var config = {
    method: "post",
    url: "/api/v1/user/student/register/",
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
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
      userStore.$patch({
        user: response.data,
      });
      authStore.$patch({
        isAuthenticated: true,
        token: response.data.token,
      });
      // TODO: Get user token and save it in state and local storage (ask to @joel)
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("isAuthenticated", true);
      closeRegistrationModal();
    })
    .catch(function (error) {
      createToast(
        {
          title: "Estamos teniendo problemas",
          description: "Hubo un error al momento de crear la cuenta.",
        },
        {
          showIcon: "true",
          hideProgressBar: "true",
          type: "error",
          transition: "slide",
          position: "top-right",
          timeout: 5000,
          toastBackgroundColor: "#FF5252",
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
  <div
    class="max-w-[500px] h-screen md:h-full md:my-auto md:px-12 px-6 py-8 content-center bg-gradient-to-tr from-black/95 to-[#090617] md:rounded-xl md:border md:border-base-100/20 text-base-100 shadow-xl"
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
        Registrate y empieza a disfrutar de nuestros cursos exclusivos.
      </h1>
      <div class="flex">
        <FormKit
          type="text"
          name="name"
          placeholder="Nombre"
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
        <div class="w-[4%]"></div>
        <FormKit
          type="text"
          name="lastname"
          placeholder="Apellido"
          validation="required"
          :validation-messages="{
            required: 'El apellido es requerido.',
          }"
          :classes="{
            outer: 'mb-3',
            inner: 'bg-[#292E36]/30 rounded-xl mb-1',
            input:
              'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
            validation: 'text-blue-300',
          }"
        />
      </div>
      <FormKit
        type="text"
        name="username"
        placeholder="Nombre de Usuario"
        validation="required"
        :validation-messages="{
          required: 'El nombre de usuario es requerido.',
        }"
        :classes="{
          outer: 'mb-3',
          inner: 'bg-[#292E36]/30 rounded-xl mb-1',
          input:
            'w-full h-[34px] px-3 border-none text-base-100 text-white placeholder-text-gray-200',
          validation: 'text-blue-300',
        }"
      />
      <!-- <FormKit
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
      /> -->
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
      <!-- <FormKit
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
      /> -->
      <div class="form-control mb-3">
        <label class="label cursor-pointer">
          <input
            type="checkbox"
            v-model="acceptedTermsAndConditions"
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
      <BasePrimaryButton
        :disabled="!acceptedTermsAndConditions"
        label="Crear cuenta"
      />

      <span class="flex justify-center text-base-100 text-sm py-2"
        >¿Ya tienes una cuenta?&nbsp;
        <a
          @click="openLoginModal"
          class="text-success hover:text-success hover:underline"
          >Iniciar sesión</a
        ></span
      >
    </FormKit>
  </div>
</template>
