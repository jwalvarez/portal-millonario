<template>
  <div class="relative carousel w-full">
    <img
      class="absolute h-full w-auto object-fit -top-10 left-0 opacity-10 md:opacity-75"
      src="../assets/bg_hero.png"
    />
    <div id="slide1" class="carousel-item relative w-full block">
      <div class="md:px-[10%] block mb-20">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="../assets/hero-img-2.png"
            class="md:max-w-[50%] max-w-full rounded-lg shadow-2xl"
          />

          <div class="md:ml-10 space-y-2">
            <h1
              class="md:text-5xl md:text-left text-center text-2xl text-white font-inter-black mb-4"
            >
              Encuentra cursos,
              <span class="text-primary">genera dinero con ellos.</span>
            </h1>
            <a class="w-2/3" href="#courses">
              <BasePrimaryButton label="Descubrir Cursos" />
            </a>
          </div>
        </div>
      </div>
      <Tape />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Tape from "./Tape.vue";
import BasePrimaryButton from "./base/BasePrimaryButton.vue";
import BaseCourseButton from "./base/BaseCourseButton.vue";

export default {
  components: {
    Icon,
    Tape,
    BasePrimaryButton,
    BaseCourseButton,
  },
};
</script>
