<template>
  <a
    href="#"
    class="w-full block h-full border bg-base-100/5 border-black/30 rounded-lg cursor-default"
  >
    <div class="relative">
      <img
        alt="blog photo"
        src="https://img-b.udemycdn.com/course/240x135/1278360_beb4_3.jpg"
        class="relative rounded-t-lg max-h-40 w-full object-cover"
      />
      <div
        class="absolute top-0 left-0 ml-2 flex flex-wrap justify-starts items-center my-2"
      >
        <div
          v-for="tag in course.tags"
          class="text-sm mr-1 py-1.5 px-4 text-white hover:text-success bg-black/80 rounded-xl backdrop-blur-md"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="w-full p-4">
      <h2
        class="text-base-100 text-lg font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
      >
        {{ course.name }}
      </h2>
      <div class="flex-grow border-t border-base-100/10 my-2"></div>
      <!-- <span class="flex justify-between my-2">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-clock text-base-100 mr-2 my-auto"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
            />
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
            />
          </svg>
          <p class="text-sm text-base-100 font-medium my-auto">
            {{ startDate }}
          </p>
        </div>
        <div class="avatar-group -space-x-4 flex">
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=3194" />
            </div>
          </div>
        </div>
      </span> -->
      <p class="text-base-100 text-lg font-black">
        COP ${{ course.price }}.900
      </p>
      <p class="text-base-100/40 text-md mb-4 course-description">
        {{ course.description }}
      </p>
      <BaseCourseButton @click="setSelectedCourse" label="Ver Curso" />
    </div>
  </a>
</template>
<script>
import axios from "axios";
import { useCoursesStore } from "../stores/course";
import BaseCourseButton from "./base/BaseCourseButton.vue";

export default {
  setup() {
    const coursesStore = useCoursesStore();
    return {
      coursesStore,
    };
  },

  props: {
    course: Array,
  },
  components: { BaseCourseButton },
  methods: {
    setSelectedCourse() {
      // ? Get Course Schedule, save it and pass it to the store
      axios
        .get(`/api/v1/course/${this.course.id}/get_schedules/`)
        .then((response) => {
          this.course.schedule = response.data;
          this.coursesStore.setSelectedCourse(this.course);
          localStorage.setItem("selectedCourse", JSON.stringify(this.course));
        });

      this.$router.push("/curso/");
      this.$router.push({
        path: "/curso",
        query: { course: this.course.id, start: "15" },
      });
    },
  },
};
</script>
<style lang=""></style>
