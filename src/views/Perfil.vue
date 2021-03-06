<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const getInitials = () => {
  const name = userStore.user.first_name + " " + userStore.user.last_name;
  const names = name.split(" ");
  const initials = names.map((name) => name[0]).join("");
  return initials;
};
</script>

<template>
  <div class="md:w-[70%] w-[90%] mx-auto">
    <div class="text-center relative mt-20">
      <div class="absolute z-20 -top-20 md:left-[40%] left-[30%]">
        <div class="avatar placeholder my-6">
          <div
            v-if="userStore.user.profile_pic"
            class="md:w-64 w-32 rounded-full shadow-2xl"
          >
            <img :src="userStore.user.profile_pic" />
          </div>
          <div
            v-else
            class="bg-neutral-focus text-neutral-content rounded-full w-24"
          >
            <span class="text-3xl font-black">{{ getInitials() }}</span>
          </div>
        </div>
        <h2 class="md:text-3xl text-xl text-base-100 font-black">
          {{ userStore.user.first_name }} {{ userStore.user.last_name }}
        </h2>
        <p class="text-sm text-base-100 font-medium my-auto">
          {{ userStore.user.username && "@" + userStore.user.username }}
        </p>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-black/80 z-10 absolute rounded-3xl w-full md:h-[300px] h-[200px]"
        ></div>
        <img
          src="https://picsum.photos/1000/300"
          class="relative object-cover rounded-3xl md:h-[300px] h-[200px] w-full"
        />
      </div>
    </div>

    <div
      v-if="userStore.user.biography"
      class="md:flex justify-between mx-auto my-10"
    >
      <div class="block text-left md:w-1/2 mb-6">
        <h2
          class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Biografía
        </h2>
        <p class="text-sm text-base-100 font-medium my-auto">
          Pellentesque sodales ante et velit convallis, nec aliquet nisl
          eleifend. Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam
          augue massa, tempor id porta quis, congue et tortor. Nulla molestie
          maximus ultricies. Aenean urna ipsum, ultrices ut tortor ac,
          consectetur luctus sapien.
        </p>
      </div>
      <div class="block text-left">
        <h2
          class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Código referido
        </h2>
        <div class="flex">
          <button
            @click="
              copyReferalCode(
                'Código copiado',
                'Ahora puedes compartir el código con tus amigos.'
              )
            "
            class="btn text-success text-md font-bold mb-4"
          >
            <span id="referal-code">DDAS-123S-124K-123k-2222</span>
          </button>
        </div>
      </div>
    </div>

    <div class="block text-left w-[70%] mt-20">
      <h2
        class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Estadisticas
      </h2>
    </div>

    <div
      class="block md:flex stats shadow bg-base-100/5 border border-black/20 mb-20"
    >
      <div
        class="stat md:w-1/3 w-full hover:bg-base-100/10 transition-all cursor-default"
      >
        <div class="stat-title font-bold text-success">Cursos iniciados</div>
        <div class="md:text-5xl text-4xl text-success font-black">12</div>
        <div class="text-sm text-base-100/60">
          Descubre y aprende temas y conceptos especificos.
        </div>
      </div>

      <div
        class="stat md:w-1/3 w-full hover:bg-base-100/10 transition-all cursor-default"
      >
        <div class="stat-title font-bold text-success">Cursos completados</div>
        <div class="md:text-5xl text-4xl text-success font-black">86%</div>
        <!-- <progress class="progress progress-success bg-accent mb-2" value="86" max="100"></progress> -->
        <div class="text-sm text-base-100/60">
          Porcentaje de de finalización de tus cursos.
        </div>
      </div>

      <div
        class="stat md:w-1/3 w-full hover:bg-base-100/10 transition-all cursor-default"
      >
        <!-- <div class="stat-figure text-primary">
                    <div class="avatar online">
                        <div class="w-16 rounded-full">
                            <img src="https://api.lorem.space/image/face?w=128&h=128" />
                        </div>
                    </div>
                </div> -->
        <div class="stat-title font-bold text-success">Referidos</div>
        <div class="md:text-5xl text-4xl text-success font-black">4</div>
        <div class="text-sm text-base-100/60">
          Los referidos son los usuarios que han comprado un curso por medio de
          tu link.
        </div>
      </div>
    </div>

    <div id="my-courses" class="block text-left w-[70%]">
      <h2
        class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Mis cursos
      </h2>
    </div>
    <div class="flex py-4 space-x-6 ml-[0%] rounded-box overflow-x-scroll">
      <div
        v-for="course in userStore.myCourses"
        class="carousel-item shadow-xl rounded-2xl h-90 w-[300px] hover:md:-translate-y-2 duration-300"
      >
        <CourseCard :course="course" />
      </div>
    </div>
  </div>
</template>
<script>
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import CourseCard from "../components/CourseCard.vue";
export default {
  methods: {
    copyReferalCode: (title, description) => {
      var text = document.getElementById("referal-code").textContent;
      navigator.clipboard.writeText(text).then(
        createToast(
          {
            title: title,
            description: description,
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
        )
      );
    },
  },
  data() {
    return {
      trading_courses: [
        {
          title: "Introduccion al trading by Andrés",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/",
          img: "https://picsum.photos/700/400",
          startDate: "Junio 12, 2022",
          tags: ["#trading", "#binance"],
        },
        {
          title: "Opciones binarias",
          description:
            "Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/goarbit",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
          startDate: "Agosto 3, 2022",
          tags: ["#trading", "#bitcoin"],
        },
        {
          title: "¿Qué es GoArbit?",
          description:
            "Nunc malesuada euismod lectus. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/perfil",
          img: "https://picsum.photos/600/500",
          startDate: "Junio 17, 2022",
          tags: ["#trading", "#exchange"],
        },
      ],
    };
  },

  components: { CourseCard },
};
</script>
<style lang=""></style>
