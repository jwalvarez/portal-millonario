<template>
  <div class="md:w-[80%] w-[90%] mx-auto">
    <div class="flex">
      <div class="block w-3/4 mr-10">
        <div class="text-center relative mt-14">
          <h2
            class="md:text-3xl text-left text-xl text-base-100 font-black mb-3"
          >
            🚀 Video introductorio Goarbit
          </h2>
          <div class="flex justify-center">
            <div
              class="bg-black/60 z-10 absolute rounded-3xl w-full md:h-[400px] h-[300px]"
            ></div>
            <img
              src="https://picsum.photos/1000/400"
              class="relative rounded-3xl md:h-[400px] h-[300px] object-cover"
            />
          </div>
        </div>

        <div class="md:flex justify-between mx-auto mt-6">
          <div class="block text-left md:w-full mb-6">
            <h2
              class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
            >
              Información del curso
            </h2>
            <p class="text-sm text-base-100 font-normal my-auto">
              Pellentesque sodales ante et velit convallis, nec aliquet nisl
              eleifend. Nullam cursus eros risus, ut congue nibh accumsan ac.
              Nullam augue massa, tempor id porta quis, congue et tortor. Nulla
              molestie maximus ultricies. Aenean urna ipsum, ultrices ut tortor
              ac, consectetur luctus sapien.
            </p>
            <!-- TODO: Put course schedule here -->
            <div class="flex my-6">
              <div class="block">
                <div
                  class="px-4 text-white/80 text-sm py-3 my-auto bg-black/10 rounded-lg mr-4 border-[1px] border-base-100/10 uppercase font-bold cursor-default"
                >
                  Lunes, 8:30 pm
                  <div class="badge badge-primary ml-4">2hr</div>
                </div>
              </div>
              <div class="block">
                <div
                  class="px-4 text-white/80 text-sm py-3 my-auto bg-black/10 rounded-lg mr-4 border-[1px] border-base-100/10 uppercase font-bold cursor-default"
                >
                  Lunes, 8:30 pm
                  <div class="badge badge-primary ml-4">2hr</div>
                </div>
              </div>
              <div class="block">
                <div
                  class="px-4 text-white/80 text-sm py-3 my-auto bg-black/10 rounded-lg mr-4 border-[1px] border-base-100/10 uppercase font-bold cursor-default"
                >
                  Lunes, 8:30 pm
                  <div class="badge badge-primary ml-4">2hr</div>
                </div>
              </div>
            </div>
            <p class="text-sm text-base-100 font-normal| my-auto">
              Pellentesque sodales ante et velit convallis, nec aliquet nisl
              eleifend. Nullam cursus eros risus, ut congue nibh accumsan ac.
              Nullam augue massa, tempor id porta quis, congue et tortor. Nulla
              molestie maximus ultricies. Aenean urna ipsum, ultrices ut tortor
              ac, consectetur luctus sapien.Pellentesque sodales ante et velit
              convallis, nec aliquet nisl eleifend. Nullam cursus eros risus, ut
              congue nibh accumsan ac. Nullam augue massa, tempor id porta quis,
              congue et tortor222.
            </p>
          </div>
        </div>
      </div>
      <div class="block mx-4">
        <div class="md:flex justify-between mx-auto my-24 sticky top-20">
          <div class="block text-left md:w-full mb-6">
            <h2
              class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
            >
              Contenido del curso
            </h2>
            <div class="block">
              <ul class="steps steps-vertical text-base-100">
                <li class="step cursor-default step-neutral">
                  Principios en Goarbit
                </li>
                <li class="step cursor-default step-neutral">
                  Introducción a Criptomonedas
                </li>
                <li class="step cursor-default step-neutral">
                  Exchange y Binance
                </li>
                <li class="step cursor-default step-neutral">
                  Principios de economía
                </li>
                <li data-content="●" class="step cursor-default step-neutral">
                  Mira todo ingresando al curso
                </li>
              </ul>
            </div>
            <div class="card w-full bg-accent/40 text-primary-content my-6">
              <div class="card-body">
                <h2 class="card-title text-lg">
                  Descuento del 50% en la compra del siguiente curso.
                </h2>
                <p class="text-sm">
                  Aprovecha este descuento por tiempo limitado
                </p>
                <button class="btn btn-sm">Comprar</button>
                <div class="card-actions justify-start mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block text-left w-[70%] mt-20">
      <h2
        class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Adquiere un paquete de Goarbit
      </h2>
    </div>

    <div class="block md:flex shadow mb-20">
      <div
        v-for="price_item in price_table"
        key="price_item.id"
        class="card w-96 bg-accent/50 hover:bg-primary/40 text-primary-content my-6 mr-6 transition-all duration-500"
      >
        <div class="card-body inline-block align-top">
          <h2 class="card-title text-5xl text-base-100">
            {{ price_item.price }} USD
          </h2>
          <p class="text-base-100 my-4">
            {{ price_item.description }}
          </p>

          <ul class="list-disc list-inside mt-2 h-52">
            <div
              v-for="(feacture, index) in price_item.feacture"
              key="index"
              class="flex mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-base-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="mx-4 text-base-100">{{ feacture }}</span>
            </div>
          </ul>
          <BaseCourseButton label="Comprar" />
        </div>
      </div>
    </div>

    <div class="block text-left w-[70%] mt-20">
      <h2
        class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Quiero invertir en Goarbit
      </h2>
      <p class="text-sm text-base-100 font-normal my-auto">
        Pellentesque sodales ante et velit convallis, nec aliquet nisl eleifend.
        Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam augue
        massa, tempor id porta quis, congue et tortor. Nulla molestie maximus
        ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur luctus
        sapien.
        <br />
        <br />
        Pellentesque sodales ante et velit convallis, nec aliquet nisl eleifend.
        Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam augue
        massa, tempor id porta quis, congue et tortor. Nulla molestie maximus
        ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur luctus
        sapien.
        <br />
        <br />
        Pellentesque sodales ante et velit convallis, nec aliquet nisl eleifend.
        Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam augue
        massa, tempor id porta quis, congue et tortor. Nulla molestie maximus
        ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur luctus
        sapien.Pellentesque sodales ante et velit convallis, nec aliquet nisl
        eleifend. Nullam cursus eros risus, ut congue nibh accumsan ac. Nullam
        augue massa, tempor id porta quis, congue et tortor. Nulla molestie
        maximus ultricies. Aenean urna ipsum, ultrices ut tortor ac, consectetur
        luctus sapien.
      </p>
      <div class="w-1/2 my-10">
        <BasePrimaryButton label="¡Empezar a invertir!" />
      </div>
    </div>

    <div id="recomendation" class="block text-left w-[70%]">
      <h2
        class="my-2 text-base-100 text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Puede que te interese
      </h2>
    </div>

    <div
      class="flex py-4 space-x-6 ml-[0%] rounded-box overflow-x-scroll mb-44"
    >
      <div
        v-for="course in trading_courses"
        class="carousel-item shadow-xl rounded-2xl h-90 w-[300px] hover:md:-translate-y-2 duration-300"
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
import BaseCourseButton from "../components/base/BaseCourseButton.vue";
import BasePrimaryButton from "../components/base/BasePrimaryButton.vue";
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
          title: "Introduccion al trading by Andrés",
          description:
            "Nunc malesuada euismod lectus. Duis condimentum tellus pellentesque turpis consequat ornare. Integer posuere dignissim quam, in vehicula orci maximus quis. Nunc sed arcu a lorem consequat feugiat in a sapien. ",
          url: "/",
          img: "https://picsum.photos/700/400",
          startDate: "Junio 12, 2022",
          tags: ["#trading", "#binance"],
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
      ],
      price_table: [
        {
          id: 1,
          price: 50,
          description:
            "Un usuario, acceso durante 6 meses al material del curso.",
          feacture: [
            "Precio por un usuario.",
            "Acceso a los materiales del curso.",
            "Contacto directo con los asesores.",
            "50% de descuento en el proximo curso.",
          ],
        },
        {
          id: 2,
          price: 100,
          description:
            "Un usuario, acceso durante 6 meses al material del curso.",
          feacture: [
            "Precio por un usuario.",
            "Acceso a los materiales del curso.",
            "Contacto directo con los asesores.",
          ],
        },
        {
          id: 3,
          price: 150,
          description:
            "Un usuario, acceso durante 6 meses al material del curso.",
          feacture: [
            "Precio por un usuario.",
            "Acceso a los materiales del curso.",
            "Contacto directo con los asesores.",
          ],
        },
      ],
    };
  },
  components: { CourseCard, BaseCourseButton, BasePrimaryButton },
};
</script>
<style lang=""></style>
