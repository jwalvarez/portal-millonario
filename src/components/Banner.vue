<template>
  <div class="relative -top-20 carousel w-full h-screen bg-neutral/5">
  <div id="slide1" class="carousel-item relative w-full">
    <div class="hero min-h-screen px-48">
      <div class="hero-content flex-col lg:flex-row">
      <img src="https://picsum.photos/700/400" class="max-w-lg mr-8 rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl text-base-100 font-bold">Encuentra cursos, genera dinero con ellos</h1>
        <div class="flex mt-6">
          <Icon/>
          <Icon/>
          <Icon/>
          <Icon/>
        </div>
      </div>
    </div>
    </div>
    <!-- <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"> /  -->
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <h2 class="text-6xl text-success font-black mx-auto my-auto">
      Banner 2
    </h2>
    <!-- <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"> /  -->
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <h2 class="text-6xl text-error font-black mx-auto my-auto">
      Banner 3
    </h2>
    <!-- <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"> /  -->
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
  <Tape/>
</template>

<script>
import Icon from './Icon.vue';
import Tape from './Tape.vue'

export default {
  components: {
    Icon,
    Tape
  }
}
</script>