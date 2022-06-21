<script setup>
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { ref } from "vue";

import BasePrimaryButton from "./base/BasePrimaryButton.vue";

import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const authStore = useAuthStore();

const loading = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Login User request here
  var data = JSON.stringify({
    username: formData.value["username"],
    password: formData.value["password"],
  });

  var config = {
    method: "post",
    url: "/api/v1/orchestrator/open/login/",
    headers: {
      "content-type": "application/json",
    },
    data: data,
  };

  axios(config).then((response) => {
    loading.value = false;
    createToast(
      {
        title: "Ha iniciado sesión correctamente",
        description: "¡Ya puedes empezar a descubrir nuestros cursos!",
      },
      {
        showIcon: "true",
        hideProgressBar: "true",
        type: "success",
        transition: "slide",
        position: "top-right",
        timeout: 3000,
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
    // todo: get user information when login
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("token", response.data.key);
    closeLoginModal();
  });
  // .catch( (error) =>{
  //   loading.value = false;
  //   createToast(
  //     {
  //       title: "Estamos teniendo problemas",
  //       description: "Hubo un error al momento de ingresar a la cuenta.",
  //     },
  //     {
  //       showIcon: "true",
  //       hideProgressBar: "true",
  //       type: "error",
  //       transition: "slide",
  //       position: "top-right",
  //       timeout: 5000,
  //       toastBackgroundColor: "#FF5252",
  //     }
  //   );
  // });
};

const closeLoginModal = () => {
  document.getElementById("login-modal").classList.remove("modal-open");
};

const openRegistrationModal = () => {
  closeLoginModal();
  document.getElementById("registration-modal").classList.add("modal-open");
};
</script>

<template>
  <div
    class="h-screen md:h-full md:my-auto md:px-16 px-6 py-8 content-center bg-gradient-to-tr from-black/95 to-[#090617] md:rounded-xl md:border md:border-base-100/20 text-base-100 shadow-xl"
  >
    <div class="flex justify-start pb-6 cursor-pointer">
      <label @click="closeLoginModal" for="my-modal-2">
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
      @submit="submitHandler"
    >
      <h1 class="mb-6 text-base-100 text-2xl font-black">Iniciar sesión</h1>

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

      <div class="form-control mb-3">
        <label class="label cursor-pointer">
          <span class="text-base-100 text-md"
            >¿No recuerdas la contraseña?
            <a class="text-success hover:text-success hover:underline" href="#"
              >Recuperar contraseña.</a
            ></span
          >
        </label>
      </div>
      <BasePrimaryButton
        @click="loading = !loading"
        :loading="loading"
        label="Iniciar sesión"
      />
      <!-- todo: Disable button when sending request (create new user) -->
      <span class="flex justify-center text-base-100 text-sm py-2"
        >¿No tienes una cuenta?&nbsp;
        <a
          @click="openRegistrationModal"
          class="text-success hover:text-success hover:underline"
          >Crear cuenta</a
        ></span
      >
    </FormKit>
  </div>
</template>
