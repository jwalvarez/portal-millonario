<template>

  <div class="relative md:-top-20 -top-10 carousel w-full h-screen">
    <img class="absolute h-full w-auto object-fit -top-10 right-0" src="../assets/bg_hero.png">
    <div id="slide1" class="carousel-item relative w-full">
      <div class="hero min-h-screen md:px-48">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://picsum.photos/700/700" class="md:max-w-md max-w-full rounded-lg shadow-2xl" />
          <div class="space-y-2">
            <h1 class="md:text-5xl text-3xl text-base-100 font-medium text-center mb-4">Encuentra cursos, genera dinero
              con
              ellos</h1>
            <BasePrimaryButton label="Crear una cuenta"></BasePrimaryButton>
            <BaseCourseButton label="Ya tengo una cuenta"></BaseCourseButton>
            <!-- <div class="flex mt-6">
              <Icon />
              <Icon />
              <Icon />
              <Icon />
            </div> -->
          </div>
        </div>
      </div>
      <!-- <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"> /  -->
      <!-- <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div> -->
    </div>
    <!-- <div id="slide2" class="carousel-item relative w-full">
      <h2 class="text-6xl text-success font-black mx-auto my-auto">
        Banner 2
      </h2>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div> -->
    <!-- <div id="slide3" class="carousel-item relative w-full">
      <h2 class="text-6xl text-error font-black mx-auto my-auto">
        Banner 3
      </h2>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div> -->
  </div>
  <Tape />
</template>

<script>
import Icon from './Icon.vue';
import Tape from './Tape.vue'
import BasePrimaryButton from './base/BasePrimaryButton.vue';
import BaseCourseButton from './base/BaseCourseButton.vue';

export default {
  components: {
    Icon,
    Tape,
    BasePrimaryButton,
    BaseCourseButton
  }
}
</script>