<template>
  <!-- <img class="absolute w-full -top-72" src="./assets/bg_hero.png"> -->
  <!-- <div class="absolute">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"
      style="opacity: 1;">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: rgb(247, 0, 181);"></stop>
          <stop offset="100%" style="stop-color: rgb(247, 0, 181);"></stop>
        </linearGradient>
      </defs>
      <path id="blob" fill="url(#gradient)" style="opacity: 1;">
        <animate attributeName="d" dur="25000ms" repeatCount="indefinite"
          values="M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z">
        </animate>
      </path>
    </svg>
  </div> -->

  <!-- Put this part before </body> tag -->

  <label
    id="registration-modal"
    class="transition-all duration-300 modal cursor-pointer bg-[#090617]/95"
  >
    <label
      class="md:modal-box md:shadow-none md:bg-transparent relative"
      for=""
    >
      <Register />
    </label>
  </label>

  <label
    id="login-modal"
    class="transition-all duration-300 modal cursor-pointer bg-[#090617]/95"
  >
    <label
      class="md:modal-box md:shadow-none md:bg-transparent relative"
      for=""
    >
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
        v-if="showNav"
        class="sticky -top-1 z-50 navbar bg-[#090617]/90 backdrop-blur-xl md:px-48 px-0 py-1"
      >
        <div class="flex-1 mx-2">
          <div class="avatar placeholder">
            <div class="bg-base-100/10 text-neutral-content rounded-full w-12">
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
            </div>
          </div>
          <router-link
            to="/"
            class="text-base-100 btn btn-ghost normal-case text-xl"
            >Portal
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
            <!-- data-tip="@jwalvarez" class="tooltip tooltip-bottom" -->

            <li class="flex justify-end">
              <div class="flex btn-ghost">
                <!-- <img class="w-10 mask mask-squircle object-contain p-0"
                  src="https://api.lorem.space/image/shoes?w=160&h=160" /> -->
                <!-- <div class="block">
                  <label for="my-modal-3"
                    class="text-success font-bold normal-case text-sm -mb-2 py-0 w-full cursor-pointer">Crear
                    cuenta</label>
                </div> -->
                <div class="block">
                  <!-- <router-link to="/register" class="text-success font-bold normal-case text-sm -mb-2 py-0 w-full">Crear
                    cuenta</router-link> -->
                  <label
                    @click="openLoginModal"
                    class="text-success font-bold normal-case text-sm -mb-2 py-0 w-full cursor-pointer"
                    >Iniciar sesión</label
                  >
                </div>
              </div>
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
      <router-view />
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
        <div class="flex mb-4 justify-between">
          <div class="flex">
            <img
              class="md:w-20 w-16 mask mask-squircle object-contain p-0"
              src="https://api.lorem.space/image/shoes?w=160&h=160"
            />
            <div class="block my-auto ml-4">
              <span class="text-base-100 text-md w-full">Hola 👋</span><br />
              <router-link
                to="/perfil"
                @click="toggleMenu"
                class="text-base-100 font-bold text-xl w-full"
                >Jhon Álvarez
              </router-link>
              <!-- <span an class="text-base-100/20 normal-case my-0 text-xs w-full">@jwalvez</span> -->
            </div>
          </div>
          <span
            class="w-8 bg-primary rounded-full my-auto p-[6px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-gear-fill text-base-100"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
              />
            </svg>
          </span>
        </div>
        <div class="flex justify-between mt-4 items-baseline">
          <h2 class="text-3xl text-base-100 font-bold">Mis cursos</h2>
          <a
            class="text-success hover:text-success hover:underline"
            href="/courses"
            >Ver todos</a
          >
        </div>
        <!-- todo: fix heigh of card -->
        <nav class="carousel carousel-center my-4 space-x-4 rounded-box">
          <router-link
            v-for="(item, index) in courses"
            :to="{ path: item.url }"
            :key="index"
            @click="toggleMenu"
            s
            class="carousel-item h-full items-center py-2 bg-base-100/10 rounded-3xl"
          >
            <div class="w-52 p-4">
              <img
                class="h-full w-full object-cover rounded-xl mb-2"
                :src="item.img"
                alt=""
              />
              <h2
                class="text-sm text-base-100 overflow-hidden whitespace-nowrap text-ellipsis w-auto"
              >
                {{ item.title }}
              </h2>
              <progress
                class="mt-6 progress progress-primary w-full bg-black"
                :value="item.progress"
                max="100"
              ></progress>
            </div>
          </router-link>
        </nav>
        <h2 class="text-3xl text-base-100 font-bold mt-4">Menú</h2>
        <nav class="grid grid-cols-3 my-4">
          <router-link
            v-for="(item, index) in menu"
            :to="{ path: item.url }"
            :key="index"
            @click="toggleMenu"
            s
            class="flex justify-center items-center mr-2 mb-2 hover:-translate-y-2 duration-200 bg-success rounded-lg h-10"
          >
            <h2 class="text-lg font-bold text-accent">{{ item.title }}</h2>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Drawer from "./components/Drawer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
export default {
  components: {
    Nav,
    Drawer,
    Register,
    Login,
  },
  computed: {
    showNav() {
      var route = this.$router.currentRoute.value.fullPath;
      return route != "/register" ? true : false;
    },
  },
  data() {
    return {
      checked: false,
      menu: [
        {
          title: "Inicio",
          url: "/",
        },
        {
          title: "Trading",
          url: "/curso",
        },
        {
          title: "Goarbit",
          url: "/goarbit",
        },
        {
          title: "Publicidad",
          url: "/goarbit",
        },
      ],
      courses: [
        {
          title: "Introduccion al trading by Andrés",
          url: "/",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
          progress: 10,
        },
        {
          title: "Opciones binarias",
          url: "/goarbit",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
          progress: 22,
        },
        {
          title: "¿Qué es GoArbit?",
          url: "/s",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
          progress: 5,
        },
      ],
      trading_courses: [
        {
          title: "Introduccion al trading by Andrés",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
        },
        {
          title: "Opciones binarias",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/goarbit",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
        },
        {
          title: "¿Qué es GoArbit?",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/s",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
        },
      ],
    };
  },
  methods: {
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
