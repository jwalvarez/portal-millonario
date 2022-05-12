<template>
  <div class="relative -top-20 carousel w-full h-screen bg-neutral">
  <div id="slide1" class="carousel-item relative w-full">
    <h2 class="text-6xl text-info font-black mx-auto my-auto">
      Banner principal
    </h2>
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
</template>