<template>
  <div class="md:w-[70%] w-[90%] mx-auto">
    <div class="text-center relative mt-20">
      <div class="absolute z-20 -top-20 md:left-[40%] left-[30%]">
        <div class="avatar my-6">
          <div class="md:w-64 w-32 rounded-full shadow-2xl">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
        </div>
        <h2 class="md:text-3xl text-xl text-base-100 font-black">
          Jhon Álvarez
        </h2>
        <p class="text-sm text-base-100 font-medium my-auto">@jwalvarez</p>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-black/60 z-10 absolute rounded-3xl w-full md:h-[300px] h-[200px]"
        ></div>
        <img
          src="https://picsum.photos/1000/300"
          class="relative rounded-3xl md:h-[300px] h-[200px]"
        />
      </div>
    </div>

    <div class="md:flex justify-between mx-auto my-10">
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
          <p class="text-success text-md font-bold mb-4">
            xaksjdhuqowiu123laksjdlkxd
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-clipboard text-success mx-4 w-4 h-4"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
            />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
            />
          </svg>
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
        v-for="course in trading_courses"
        class="carousel-item shadow-xl rounded-2xl h-90 w-[300px] m-auto hover:md:-translate-y-2 duration-300"
      >
        <CourseCard
          :img="course.img"
          :title="course.title"
          :description="course.description"
          :startDate="course.startDate"
          :tags="course.tags"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CourseCard from "../components/CourseCard.vue";
export default {
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
          url: "/s",
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
