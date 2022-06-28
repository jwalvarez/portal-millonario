import { defineStore } from "pinia";

export const useVideoStore = defineStore({
  id: "video",
  state: () => ({
    playing: false,
    video_position: 0,
    video_duration: "",
  }),
  action: {
  }
})