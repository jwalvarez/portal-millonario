<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import router from "../router";

import { useWompiStore } from "../stores/wompi";

import BaseCourseButton from "../components/base/BaseCourseButton.vue";

const wompiStore = useWompiStore();

const reloadPage = () => {
  wompiStore.verificationPaymentError = false;
  window.location.reload();
};

onMounted(() => {
  const url = router.currentRoute.value.fullPath;
  var parts = url.split("/");
  var id = parts.pop() || parts.pop();

  console.log("transaction id: ", id);
  axios
    .get(
      `https://portal-millonario.free.beeceptor.com/api/v1/orchestrator/invoice/${id}`,
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      console.log("RESPONSE: ", response.data.ref);
      wompiStore.verificationPaymentError = false;
      router.push("/perfil");
    })
    .catch((error) => {
      wompiStore.verificationPaymentError = true;
      console.log("ERROR: ", error);
    });
});
</script>

<template>
  <div class="relative h-screen flex justify-center">
    <div class="h-auto py-20">
      <div
        v-if="!wompiStore.verificationPaymentError"
        class="flex justify-center my-20"
      >
        <div class="jelly"></div>

        <svg width="0" height="0" class="jelly-maker">
          <defs>
            <filter id="uib-jelly-ooze">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="6.25"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="ooze"
              />
              <feBlend in="SourceGraphic" in2="ooze" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="block mx-10">
        <h2
          :class="
            (wompiStore.verificationPaymentError
              ? ' text-error '
              : ' text-base-100 ') + 'text-2xl font-black text-center'
          "
        >
          {{
            wompiStore.verificationPaymentError
              ? "Error en verificación"
              : "Verificando transacción"
          }}
        </h2>
        <p class="text-base-100/40 font-normal text-center">
          Esta verificación se hace por medio de
          <a class="link text-primary" href="https://wompi.co/">wompi</a>. Por
          favor, espere unos segundos.
        </p>
        <div v-if="wompiStore.verificationPaymentError" class="my-8 space-y-2">
          <BaseCourseButton @click="reloadPage" label="Verificar Nuevamente" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jelly {
  --uib-size: 120px;
  --uib-speed: 0.9s;
  --uib-color: #36d399;

  position: relative;
  height: calc(var(--uib-size) / 2);
  width: var(--uib-size);
  filter: url("#uib-jelly-ooze");
  animation: rotate calc(var(--uib-speed) * 2) linear infinite;
}

.jelly::before,
.jelly::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 25%;
  width: 50%;
  height: 100%;
  background: var(--uib-color);
  border-radius: 100%;
}

.jelly::before {
  animation: shift-left var(--uib-speed) ease infinite;
}

.jelly::after {
  animation: shift-right var(--uib-speed) ease infinite;
}

.jelly-maker {
  width: 0;
  height: 0;
  position: absolute;
}

@keyframes rotate {
  0%,
  49.999%,
  100% {
    transform: none;
  }

  50%,
  99.999% {
    transform: rotate(90deg);
  }
}

@keyframes shift-left {
  0%,
  100% {
    transform: translateX(0%);
  }
  50% {
    transform: scale(0.65) translateX(-75%);
  }
}

@keyframes shift-right {
  0%,
  100% {
    transform: translateX(0%);
  }
  50% {
    transform: scale(0.65) translateX(75%);
  }
}
</style>
