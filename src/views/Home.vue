<script setup>
import Banner from "../components/Banner.vue";
import CourseCard from "../components/CourseCard.vue";
</script>

<template>
  <Banner />
  <div class="md:w-[70%] w-[90%] mx-auto">
    <div class="block text-left">
      <h2
        class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        ¿Por qué elegir a Portal Millonario?
      </h2>
      <p class="text-base-100 font-normal my-auto">
        Pellentesque sodales ante et velit convallis, nec aliquet nisl eleifend.
        Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam augue
        massa, tempor id porta quis, congue et tortor. Nulla molestie maximus
        ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur luctus
        sapien.
      </p>
    </div>

    <div class="flex w-full mx-auto bg-black/20 rounded-lg my-10">
      <div
        v-for="about in abouts"
        class="py-10 px-10 cursor-default transition-all duration-700"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi my-4 text-primary/70"
            viewBox="0 0 16 16"
          >
            <path :d="about.icon" />
          </svg>
        </span>
        <p class="font-normal text-white/70">
          {{ about.message }}
        </p>
      </div>
    </div>

    <div class="flex text-left my-24">
      <div class="w-1/2">
        <h2
          class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Nuestro equipo
        </h2>
        <p class="text-base-100 font-normal my-auto">
          Pellentesque sodales ante et velit convallis, nec aliquet nisl
          eleifend. Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam
          augue massa, tempor id porta quis, congue et tortor. Nulla molestie
          maximus ultricies. Aenean urna ipsum, ultrices ut tortor ac,
          consectetur luctus sapien.Pellentesque sodales ante et velit
          convallis, nec aliquet nisl eleifend. Nullam cursus eros risus, ut
          congue nibh accumsan ac. Nullam augue massa, tempor id porta quis,
          congue et tortor. Nulla molestie maximus ultricies. Aenean urna ipsum,
          ultrices ut tortor ac, consectetur luctus sapien.Pellentesque sodales
          ante et velit convallis, nec aliquet nisl eleifend. Nullam cursus eros
          risus, ut congue nibh accumsan ac. Nullam augue massa, tempor id porta
          quis, congue et tortor. Nulla molestie maximus ultricies. Aenean urna
          ipsum, ultrices ut tortor ac, consectetur luctus sapien.
        </p>
        <div class="md:w-1/2 my-10">
          <BasePrimaryButton label="¡Empezar a invertir!" />
        </div>
      </div>
      <div class="flex justify-end md:max-w-1/2 max-w-full">
        <img
          src="../assets/founders.jpg"
          class="mask mask-hexagon w-[80%] object-cover"
        />
      </div>
    </div>

    <div id="my-courses" class="flex text-left">
      <div class="w-1/2">
        <h2
          class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Cursos de Trading
        </h2>
      </div>
    </div>

    <div class="flex py-4 space-x-6 ml-[0%] rounded-box overflow-x-scroll">
      <div
        v-for="(course, index) in trading_courses"
        :id="'course-' + index"
        class="carousel-item shadow-xl rounded-2xl h-90 w-[300px]"
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
    <div class="h-[100px]"></div>

    <div id="goarbit-courses" class="flex text-left">
      <div class="w-1/2">
        <h2
          class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Cursos de Goarbit
        </h2>
      </div>
    </div>

    <div class="flex py-4 space-x-6 ml-[0%] rounded-box overflow-x-scroll">
      <div
        v-for="(course, index) in trading_courses"
        :id="'course-' + index"
        class="carousel-item shadow-xl rounded-2xl h-90 w-[300px]"
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

    <div class="h-[200px]"></div>
  </div>
</template>

<script>
import BasePrimaryButton from "../components/base/BasePrimaryButton.vue";

export default {
  name: "Home",
  components: {
    BasePrimaryButton,
  },
  data() {
    return {
      abouts: [
        {
          icon: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z",
          message:
            "Tenetur rem magni corporis. Consectetur iure omnis similique veritatis dolorem vitae illo aliquam minima sed iste ratione suscipit sequi, perferendis quasi ipsam.",
        },
        {
          icon: "M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem magni corporis. Sed iste ratione suscipit sequi, perferendis quasi ipsam.",
        },
        {
          icon: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z",
          message:
            "Tenetur rem magni corporis. Consectetur iure omnis similique veritatis dolorem vitae illo aliquam minima sed iste ratione suscipit sequi, perferendis quasi ipsam.",
        },
      ],
      trading_courses: [
        {
          title: "Introduccion a Vue",
          description: "Aprendiendo vue con Joel, Jaisir, Angie y Jhon.",
          url: "/",
          img: "https://picsum.photos/700/400",
          startDate: "Octubre 8, 2022",
          tags: ["#trading", "#binance", "prigramming"],
        },
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
        {
          title: "¿Qué es GoArbit? 22",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. ",
          url: "/s",
          img: "https://picsum.photos/700/600",
          startDate: "Septiembre 19, 2022",
          tags: ["#trading", "#binance"],
        },
        {
          title: "¿Qué es GoArbit? 33",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/s",
          img: "https://picsum.photos/800/900",
          startDate: "Enero 24, 2023",
          tags: ["#trading", "#binance"],
        },
      ],
    };
  },
};
</script>

<style>
.course-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
