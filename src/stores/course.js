import { defineStore } from "pinia";

export const useCoursesStore = defineStore({
  id: "course",
  state: () => ({
    selectedCourse: {},
    // ? List of all courses by area (trading, marketing, goarbit, etc)
    trading: [],
    marketing: [],
    goarbit: [],
    // course_id: "",
    // course_name: "",
    // course_description: "",
    // course_price: "",
  }),
  actions: {
    setSelectedCourse(course){
      this.selectedCourse = course;
    }
  },
})

