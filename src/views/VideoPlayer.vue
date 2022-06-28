<script setup>
import { onMounted, ref, defineProps } from "vue";

import { useVideoStore } from "../stores/video.js";

const videoStore = useVideoStore();

const props = defineProps({
  src: String,
  poster: String,
});

// Add event listener on keypress
document.addEventListener(
  "keypress",
  (event) => {
    var code = event.code;
    code == "Space" && playPause();
  },
  false
);

let currentVideoPosition = ref(0);
const showControls = ref(true);

onMounted(() => {
  const video = document.getElementById("video");
  video.onloadedmetadata = function () {
    videoStore.video_duration = this.duration;
  };
  document
    .getElementById("video")
    .addEventListener("contextmenu", (event) => event.preventDefault());
  setVideoTimeEverySecond();
});

const toggleControls = () => {
  showControls.value = !showControls.value;
};

const setVideoCurrentTime = (time) => {
  const video = document.getElementById("video");
  video.currentTime = time;
  return time;
};

function setVideoTimeEverySecond() {
  const video = document.getElementById("video");

  videoStore.video_position = video.currentTime;
  currentVideoPosition = video.currentTime;
  setTimeout(setVideoTimeEverySecond, 1000);
}

const playPause = () => {
  const video = document.getElementById("video");
  if (video.paused) {
    video.play();
    videoStore.playing = true;
  } else {
    video.pause();
    videoStore.playing = false;
  }
};

const jumpTo = (time) => {
  const video = document.getElementById("video");
  video.currentTime = video.currentTime + time;
  videoStore.video_position = video.currentTime;
};
const fullScreen = () => {
  const video = document.getElementById("video");
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
};

const getTimeFromSeconds = (seconds) => {
  const minutes = Math.floor((seconds % 3600) / 60);
  const seconds_left = Math.floor(seconds % 60);

  return `${minutes}:${seconds_left}`;
};
</script>
<template>
  <div class="relative video-container w-full mx-auto">
    <video
      @click="toggleControls"
      id="video"
      class="relative video-js w-full h-auto rounded-xl"
      preload="auto"
      :poster="poster"
      data-setup="{}"
    >
      <source :src="src" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    <div
      v-if="showControls"
      class="absolute left-0 right-0 mx-auto bottom-0 w-[98%] flex justify-between space-x-2 my-2 bg-black/60 rounded-xl p-1"
    >
      <span
        class="w-auto btn btn-sm bg-transparent border-none"
        @click="jumpTo(-5)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <span
        class="w-auto btn btn-sm bg-transparent border-none"
        @click="playPause()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play"
          viewBox="0 0 16 16"
        >
          <path
            v-if="!videoStore.playing"
            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
          />
          <path
            v-else
            d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </span>
      <span
        class="w-auto btn btn-sm bg-transparent border-none"
        @click="jumpTo(10)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
      <div class="md:flex hidden my-auto w-full">
        <progress
          class="progress progress-primary w-full"
          :value="(videoStore.video_position / videoStore.video_duration) * 100"
          max="100"
        ></progress>
      </div>
      <span class="md:w-2/12 w-auto text-base-100 text-xs my-auto">
        {{ getTimeFromSeconds(videoStore.video_position) }} /
        {{ getTimeFromSeconds(videoStore.video_duration) }}
      </span>
      <span
        class="w-auto btn btn-sm bg-transparent border-none"
        @click="fullScreen()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrows-fullscreen"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>
<style></style>
