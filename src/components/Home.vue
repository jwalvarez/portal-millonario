<script setup>
import Banner from "./Banner.vue";
import CourseCard from "./CourseCard.vue";
</script>

<template>
  <Banner />
  <h1 class="text-4xl text-base-100 font-black px-[10%]">Cursos de trading</h1>
  <div class="flex py-4 space-x-6 mx-[10%] rounded-box overflow-x-scroll">
    <div v-for="course in trading_courses"
      class="carousel-item shadow-xl rounded-2xl h-90 w-[300px] m-auto hover:-translate-y-2 duration-300">
      <CourseCard :img="course.img" :title="course.title" :description="course.description"
        :startDate="course.startDate" :tags="course.tags" />
    </div>
  </div>
  <div class="h-[200px]"></div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      trading_courses: [
        {
          title: "Introduccion al trading by Andrés",
          description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/",
          img: "https://picsum.photos/700/400",
          startDate: "Junio 12, 2022",
          tags: ["#trading", "#binance"],
        },
        {
          title: "Opciones binarias",
          description: "Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/goarbit",
          img: "https://www.urbeconomica.com.mx/images/2020/criptos.jpg",
          startDate: "Agosto 3, 2022",
          tags: ["#trading", "#bitcoin"],
        },
        {
          title: "¿Qué es GoArbit?",
          description: "Nunc malesuada euismod lectus. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/s",
          img: "https://picsum.photos/600/500",
          startDate: "Junio 17, 2022",
          tags: ["#trading", "#exchange"],
        },
        {
          title: "¿Qué es GoArbit? 22",
          description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. ",
          url: "/s",
          img: "https://picsum.photos/700/600",
          startDate: "Septiembre 19, 2022",
          tags: ["#trading", "#binance"],
        },
        {
          title: "¿Qué es GoArbit? 33",
          description: "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/s",
          img: "https://picsum.photos/800/900",
          startDate: "Enero 24, 2023",
          tags: ["#trading", "#binance"],
        },
      ]
    }
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