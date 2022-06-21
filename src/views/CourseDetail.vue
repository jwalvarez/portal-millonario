<template>
  <div class="md:w-[80%] w-[90%] mx-auto">
    <div class="md:flex">
      <div class="block md:w-9/12 md:mr-10">
        <div class="text-center relative mt-14">
          <h2
            class="md:text-3xl text-left text-xl text-base-100 font-black mb-3"
          >
            🚀 {{ course.name }}
          </h2>
          <div class="flex justify-center">
            <div
              class="bg-black/60 z-10 absolute rounded-xl w-full md:h-[400px] h-[300px]"
            ></div>
            <img
              src="https://picsum.photos/1000/400"
              class="relative rounded-xl md:h-[400px] h-[300px] object-cover"
            />
          </div>
        </div>

        <div class="md:flex justify-between mx-auto mt-6">
          <div class="block text-left md:w-full">
            <h2
              class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
            >
              Información del curso
            </h2>
            <p class="text-base-100 font-normal my-auto">
              {{ course.description }}
            </p>
            <!-- TODO: Put course schedule here -->
          </div>
        </div>
      </div>

      <div class="block mt-24">
        <h2
          class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Contenido del curso
        </h2>
        <ul class="steps steps-vertical text-base-100">
          <li
            v-for="(item, idex) in course.content"
            class="step cursor-default step-neutral"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- TODO: Create Schedule Cards -->
    <div
      class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 sm:gap-6 space-y-3"
    >
      <!-- TODO: Get user information from store or show registration form -->
      <div
        v-for="nrc in course.schedule"
        class="card w-full bg-accent/40 text-primary-content p-0"
      >
        <div class="card-body px-4">
          <div class="md:flex">
            <div class="block lg:w-[90%] w-full">
              <h2 class="card-title text-lg text-left">
                Curso NRC: {{ nrc.id }}, by
                {{ nrc.teacher.first_name }}
              </h2>
              <div class="rating space-x-2">
                <input
                  v-for="i in Math.floor(nrc.teacher.rating)"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div class="w-auto lg:block hidden">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-actions justify-start mt-4">
            <BaseCourseButton label="Inscribirse" />
          </div>
          <p class="text-sm">{{ nrc.description }}</p>
          <div class="flex-grow border-t border-base-100/10 mb-2"></div>
          <h2 class="card-title text-lg">Horario de clases:</h2>

          <div class="carousel flex justify-start space-x-2">
            <div
              v-for="(session, day) in nrc.calendar"
              class="carousel-item px-2 text-white/80 text-sm py-3 my-auto bg-black/10 rounded-lg mb-2 border-[1px] border-base-100/10 uppercase font-black cursor-default"
            >
              {{ day }}
              <div class="badge badge-md font-bold badge-primary ml-2">
                {{ session }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block text-left md:w-[70%] mt-20">
      <h2
        class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        Quiero invertir en Goarbit
      </h2>
      <p class="text-base-100 font-normal my-auto">
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
      </p>
      <div class="md:w-1/2 my-10">
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
    <!-- TODO: Add course carousel here -->
  </div>
</template>
<script>
import axios from "axios";

import { useCoursesStore } from "../stores/course";

import CourseCard from "../components/CourseCard.vue";
import BaseCourseButton from "../components/base/BaseCourseButton.vue";
import BasePrimaryButton from "../components/base/BasePrimaryButton.vue";

export default {
  setup() {
    const coursesStore = useCoursesStore();
    return {
      coursesStore,
    };
  },
  components: { CourseCard, BaseCourseButton, BasePrimaryButton },
  data() {
    return {
      nrcs: [
        {
          id: "172",
          description: "Curso de programación en Python",
          schedule: [
            {
              day: "Lunes",
              time: "8:30 pm",
              duration: "2hr",
            },
            { day: "Martes", time: "8:30 pm", duration: "2hr" },
            { day: "Miércoles", time: "8:30 pm", duration: "2hr" },
            { day: "Jueves", time: "8:30 pm", duration: "2hr" },
          ],
        },
        {
          id: "174",
          description: "Curso de programación en Python",
          schedule: [
            {
              day: "Lunes",
              time: "8:30 pm",
              duration: "2hr",
            },
            { day: "Jueves", time: "8:30 pm", duration: "2hr" },
          ],
        },
        {
          id: "175",
          description: "Curso de programación en Python",
          schedule: [
            {
              day: "Lunes",
              time: "8:30 pm",
              duration: "2hr",
            },
            { day: "Jueves", time: "8:30 pm", duration: "2hr" },
          ],
        },
        {
          id: "177",
          description: "Curso de programación en Python",
          schedule: [
            {
              day: "Lunes",
              time: "8:30 pm",
              duration: "2hr",
            },
            { day: "Jueves", time: "8:30 pm", duration: "2hr" },
          ],
        },
        {
          id: "178",
          description: "Curso de programación en Python",
          schedule: [
            {
              day: "Lunes",
              time: "8:30 pm",
              duration: "2hr",
            },
            { day: "Jueves", time: "8:30 pm", duration: "2hr" },
          ],
        },
      ],
      price_table: [
        {
          id: 1,
          price: 240900,
          description:
            "Un usuario, acceso durante 6 meses al material del curso.",
          feacture: [
            "Precio por un usuario.",
            "Acceso a los materiales del curso.",
            "Contacto directo con los asesores.",
            "50% de descuento en el proximo curso.",
          ],
        },
      ],
    };
  },
  computed: {
    course: function () {
      return this.coursesStore.selectedCourse;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    const selectedCourseLocalStorage = localStorage.getItem("selectedCourse");
    const selectedCourseStore = this.coursesStore.selectedCourse;
    console.log("selectedCourse (LOCAL STORAGE): ", selectedCourseLocalStorage);
    console.log("selectedCourse (STORE): ", selectedCourseStore);

    // if (
    //   this.coursesStore.selectedCourse &&
    //   !this.coursesStore.selectedCourse.schedule
    // ) {
    //   console.log("Curso en Store pero sin horarios");
    //   const schedule = this.getSchedule(this.coursesStore.selectedCourse.id);
    //   this.coursesStore.selectedCourse.schedule = schedule;
    //   localStorage.setItem(
    //     "selectedCourse",
    //     JSON.stringify(this.coursesStore.selectedCourse)
    //   );
    // }
    // if (
    //   !this.coursesStore.selectedCourse &&
    //   localStorage.getItem("selectedCourse")
    // ) {
    //   console.log("No hay curso en Store, pero hay uno en localStorage");
    // }
  },
  methods: {
    verifyChecked: (index, number) => {
      Math.floor(number) == index ? "true" : "false";
    },
    makeReference: () => {
      const time = new Date().getTime();
      return "PRTLM-" + time;
    },
    onSubmit(form) {
      // TODO: Verify if user is logged (store)
      console.log(
        form,
        "submit------------------------------------------------"
      );
      // document.getElementById(formID).submit();
    },
  },
};
</script>
<style lang=""></style>
