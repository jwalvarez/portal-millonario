<template>
  <label
    id="registration-modal"
    class="transition-all duration-300 modal cursor-pointer bg-[#090617]/95 h-screen"
  >
    <label class="md:shadow-none md:bg-transparent relative" for="">
      <Register />
    </label>
  </label>

  <label
    id="login-modal"
    class="transition-all duration-300 modal cursor-pointer bg-[#090617]/95"
  >
    <label class="md:shad1ow-none md:bg-transparent relative" for="">
      <Login />
    </label>
  </label>

  <div class="drawer drawer-end">
    <input
      id="my-drawer-4"
      type="checkbox"
      class="drawer-toggle"
      :checked="checked"
    />
    <div class="drawer-content">
      <!-- Page content here -->
      <!-- TODO: Convert this as a separated component  -->
      <div
        v-if="!authStore.isAuthenticated"
        class="relative z-50 w-full px-4 py-3 text-white/70 text-center bg-gradient-to-r from-primary to-success"
      >
        <p class="text-xs font-inter-bold text-white/80">
          Encuentra cursos ideales para ti.
          <a class="underline hover:text-base-100 text-xs duration-500" href="">
            Empieza ahora &rarr;
          </a>
        </p>
      </div>
      <!-- TODO: Show/Hide Navbar then scrolling up/down -->
      <div
        v-if="showNav"
        class="sticky -top-1 z-50 navbar bg-[#090617]/90 backdrop-blur-xl md:px-[10%] px-0 py-4"
      >
        <div class="flex-1 mx-2">
          <router-link
            to="/"
            class="text-base-100 btn btn-ghost normal-case text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-currency-bitcoin w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"
              />
            </svg>
            Portal Millonario
          </router-link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 text-base-100">
            <li class="md:flex hidden justify-end">
              <input
                type="text"
                placeholder="Buscar curso"
                class="bg-black/20 input w-full mx-4 my-auto h-10"
              />
            </li>
          </ul>
        </div>
        <div class="flex-none">
          <!-- for="my-drawer-4" -->
          <label
            @click="toggleMenu"
            class="btn btn-square btn-ghost text-base-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
              class="inline-block w-8 h-8 stroke-current my-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <!-- <div
        v-if="!authStore.isAuthenticated"
        class="m-4 rounded-xl relative px-4 md:py-6 py-10 text-center bg-primary"
      >
        <p class="text-sm font-inter-bold text-white/80">
          Nuevo curso de programación en python. Descubrelo y empieza a hackear
          el mundo.
          <a class="underline text-success text-sm duration-500" href="">
            Ver curso &rarr;
          </a>
        </p>
      </div> -->
      <router-view />
      <Footer />
    </div>
    <div class="drawer-side">
      <!-- for="my-drawer-4" -->
      <label @click="toggleMenu" class="drawer-overlay"></label>
      <div class="menu overflow-y-auto md:w-4/12 w-full bg-[#090617] px-6">
        <!-- Sidebar content here -->
        <div class="flex justify-start py-6 cursor-pointer">
          <span @click="toggleMenu">
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
          </span>
        </div>
        <div v-if="authStore.isAuthenticated">
          <div class="flex mb-4 justify-between">
            <router-link
              to="/perfil"
              @click="toggleMenu"
              class="text-base-100 font-bold text-xl w-full flex hover:text-primary"
            >
              <img
                class="md:w-16 w-12 mask mask-squircle object-contain p-0"
                src="https://api.lorem.space/image/shoes?w=160&h=160"
              />
              <div class="block my-auto ml-4">
                <span class="text-base-100 text-sm font-medium w-full"
                  >Hola 👋</span
                ><br />
                {{ userStore.user.first_name }}
                <!-- <span an class="text-base-100/20 normal-case my-0 text-xs w-full">@jwalvez</span> -->
              </div>
            </router-link>
            <span
              data-tip="Cerrar sesión"
              class="tooltip tooltip-left my-auto p-[6px] cursor-pointer"
              @click="logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-arrow-right-square-fill w-10 h-10 text-primary"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
                />
              </svg>
            </span>
          </div>
          <div class="flex justify-between mt-8 items-baseline">
            <h2 class="text-2xl text-base-100 font-bold">Mis cursos</h2>
            <!-- <a
              class="text-sm text-success/70 hover:text-success hover:underline"
              href="/courses"
              >Ver todos</a
            > -->
          </div>
          <div
            v-if="userStore.myCourses.length <= 0"
            class="card w-full bg-gradient-to-bl from-red-500 to-red-400 text-primary-content mt-4"
          >
            <div class="block p-6 space-y-4">
              <div class="w-full text-accent">
                <h2 class="card-title text-lg">No hay cursos registrados.</h2>
                <p class="text-sm">
                  Compre un nuevo curso o pruebe a cargar nuevamente.
                </p>
              </div>
              <button
                @click="getBoughtCourses()"
                class="btn btn-sm normal-case text-sm font-normal"
              >
                Cargar nuevamente
              </button>
            </div>
          </div>
          <!-- TODO: Fix, change Course Detail Content when changing url -->
          <nav class="carousel carousel-center my-4 space-x-2 rounded-box">
            <!-- TODO: Navigate to course depending on course id -->
            <router-link
              v-for="item in userStore.myCourses"
              :to="'/curso/' + item.course"
              :key="item.course"
              @click="toggleMenu"
              class="carousel-item h-full items-center bg-black/40 rounded-xl"
            >
              <div class="w-40 p-2">
                <img
                  class="w-full h-20 object-cover rounded-xl mb-2"
                  src="https://picsum.photos/200/350"
                  alt=""
                />
                <h2
                  class="text-sm text-base-100 overflow-hidden whitespace-nowrap text-ellipsis w-auto"
                >
                  {{ item.course }}
                </h2>
                <progress
                  class="mt-6 progress progress-primary w-full bg-black"
                  :value="item.id"
                  max="100"
                ></progress>
              </div>
            </router-link>
          </nav>
        </div>
        <div
          v-else
          class="card w-full bg-accent/40 text-primary-content mb-6 shadow-[6px_6px_0px_rgba(0,212,155,1)]"
        >
          <div class="card-body text-base-100">
            <h2 class="card-title text-lg">
              ¿Qué esperas para empezar a generar ingresos?
            </h2>
            <p class="text-sm">
              Crea una cuenta y aprende cómo puedes generar ingresos
            </p>
            <div class="card-actions justify-start mt-4">
              <BasePrimaryButton
                @click="openRegistrationModal"
                label="Crear Cuenta"
              />
              <BaseCourseButton
                @click="openLoginModal"
                label="Ya tengo una cuenta"
              />
            </div>
          </div>
        </div>
        <h2 class="text-2xl text-base-100 font-bold mt-4">Menú</h2>
        <nav class="grid grid-cols-3 my-4">
          <router-link
            v-for="(item, index) in menu"
            :to="{ path: item.url }"
            :key="index"
            @click="toggleMenu"
            s
            class="flex justify-center items-center mr-2 mb-2 bg-accent/40 hover:bg-accent rounded-lg h-10"
          >
            <h2 class="text-sm text-bold text-success">{{ item.title }}</h2>
          </router-link>
        </nav>
        <div v-if="authStore.isAuthenticated" class="mt-auto mb-4 space-y-2">
          <p class="text-sm text-base-100/30 font-normal my-auto text-center">
            Solicita el retiro y recibe tu dinero cada viernes.
          </p>
          <BaseCourseButton class="" label="Solicitar retiro 🥳" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";

import { useUserStore } from "./stores/user";
import { useAuthStore } from "./stores/auth";
import { useCoursesStore } from "./stores/course";

import Nav from "./components/Nav.vue";
import Drawer from "./components/Drawer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Footer from "./components/Footer.vue";
import BasePrimaryButton from "./components/base/BasePrimaryButton.vue";
import BaseTextButton from "./components/base/BaseTextButton.vue";
import BaseCourseButton from "./components/base/BaseCourseButton.vue";

export default {
  setup() {
    const userStore = useUserStore();
    const authStore = useAuthStore();
    const coursesStore = useCoursesStore();

    return {
      authStore,
      userStore,
      coursesStore,
    };
  },
  components: {
    Nav,
    Drawer,
    Register,
    Login,
    Footer,
    BasePrimaryButton,
    BaseTextButton,
    BaseCourseButton,
  },
  computed: {
    showNav() {
      var route = this.$router.currentRoute.value.fullPath;
      return route != "/register" ? true : false;
    },
  },
  mounted() {
    localStorage.getItem("isAuthenticated") &&
      (this.authStore.$patch({
        isAuthenticated: true,
        token: localStorage.getItem("token"),
      }),
      this.userStore.$patch({
        user: JSON.parse(localStorage.getItem("user")),
      }),
      this.getBoughtCourses());
    localStorage.getItem("selectedCourse") &&
      this.coursesStore.$patch({
        selectedCourse: JSON.parse(localStorage.getItem("selectedCourse")),
      });
  },
  data() {
    return {
      checked: false,
      menu: [
        {
          title: "Inicio",
          url: "/#",
        },
        {
          title: "Trading",
          url: "",
        },
        {
          title: "Goarbit",
          url: "/curso/goarbit/3",
        },
        {
          title: "Publicidad",
          url: "/goarbit",
        },
      ],
      // courses: [
      //   {
      //     title: "Introduccion al trading by Andrés",
      //     url: "/",
      //     img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
      //     progress: 10,
      //   },
      //   {
      //     title: "Opciones binarias",
      //     url: "/goarbit",
      //     img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
      //     progress: 22,
      //   },
      //   {
      //     title: "¿Qué es GoArbit?",
      //     url: "/",
      //     img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
      //     progress: 5,
      //   },
      // ],
    };
  },
  methods: {
    async logout() {
      try {
        await axios.post("/auth/logout/").then((response) => {
          if (response.status == 200) {
            this.authStore.$reset();
            this.userStore.$reset();
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // TODO: redirect to bye bye user page
          } else {
            console.log(response);
          }
        });
      } catch (error) {
        // TODO: Show toast error
        console.log(error);
      }
    },

    setMyCourses(courses) {
      this.userStore.$patch({
        myCourses: courses,
      });
    },
    async getBoughtCourses() {
      // TODO: Fix endpoint URL to get bought courses
      try {
        await axios
          .get(
            "https://cb36-186-82-87-25.ngrok.io/api/v1/user/student/get_courses_bought/",
            {
              headers: {
                Authorization:
                  "Token " + JSON.parse(localStorage.getItem("user")).token,
              },
            }
          )
          .then((response) => {
            this.setMyCourses(response.data);
          });
      } catch (error) {
        // TODO: Show toast error
        console.log(error);
      }
    },
    toggleMenu: function () {
      this.checked = !this.checked;
    },
    openLoginModal: function () {
      document.getElementById("login-modal").classList.add("modal-open");
    },
    openRegistrationModal: function () {
      document.getElementById("registration-modal").classList.add("modal-open");
    },
  },
};
</script>

<style></style>
