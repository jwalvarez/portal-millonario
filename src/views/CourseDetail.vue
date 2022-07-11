<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import router from "../router";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import CourseCard from "../components/CourseCard.vue";
import BaseCourseButton from "../components/base/BaseCourseButton.vue";
import BasePrimaryButton from "../components/base/BasePrimaryButton.vue";
import VideoPlayer from "./VideoPlayer.vue";

import { useCoursesStore } from "../stores/course";
import { useWompiStore } from "../stores/wompi";
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";

const coursesStore = useCoursesStore();
const wompiStore = useWompiStore();
const authStore = useAuthStore();
const userStore = useUserStore();

const referral_code = ref("");
const showVideo = ref(true);
const error = ref(false);

onMounted(async () => {
  const url = router.currentRoute.value.fullPath;
  var parts = url.split("/");
  var id = parts.pop() || parts.pop();
  console.log("id", id);
  console.log(
    "Local Storage",
    JSON.parse(localStorage.getItem("selectedCourse"))?.id
  );
  if (id != (await JSON.parse(localStorage.getItem("selectedCourse"))?.id)) {
    console.log("HACER REQUEST DEL CURSO CON ID", id);
    getCourseById(id);
  }
});

const reloadPage = () => {
  window.location.reload();
};

const getCourseById = (id) => {
  axios
    .get(`/api/v1/subject/${id}/`)
    .then((response) => {
      coursesStore.$patch({
        selectedCourse: response.data,
      });
      localStorage.setItem("selectedCourse", JSON.stringify(response.data));
    })
    .catch((error) => {
      error.value = true;
    });
};

const verifyChecked = (index, number) => {
  Math.floor(number) == index ? "true" : "false";
};

function goToVerifyTransaction() {
  const id = wompiStore.django_transaction_id;
  router.push(`/verify-transaction/${id}/`);
}

async function getReference() {
  try {
    await axios
      .get("/api/v1/orchestrator/invoice/get_reference/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        wompiStore.reference = response.data.ref;
      });
  } catch (error) {
    // TODO: Show toast error
    console.log(error);
    createToast(
      {
        title: "Error al obtener referencia de pago.",
        description:
          "Por favor, intenta de nuevo más tarde o contacta con soporte.",
      },
      {
        showIcon: "true",
        hideProgressBar: "true",
        type: "error",
        transition: "slide",
        position: "top-right",
        timeout: 5000,
        toastBackgroundColor: "#FF5252",
      }
    );
  }
}

const openRegistrationModal = () => {
  document.getElementById("registration-modal").classList.add("modal-open");
};

const saveTransaction = async (transaction) => {
  try {
    await axios
      .post("/api/v1/orchestrator/invoice/", transaction, {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        // TODO: Navigate to verification page. Inject uri parameters to the url.
        wompiStore.django_transaction_id = response.data.id;
        goToVerifyTransaction();
      });
  } catch (error) {
    // TODO: Show toast error
    console.log(error);
  }
};

const payCourse = async (schedule) => {
  wompiStore.referral_code = referral_code.value;
  wompiStore.$patch({
    referral_code: referral_code.value,
    course_id: coursesStore.selectedCourse.id,
    nrc_id: schedule.id,
  });
  if (authStore.isAuthenticated) {
    console.log("Pagar");
    const ref = await getReference();
    if (ref) {
      var checkout = new WidgetCheckout({
        currency: "COP",
        amountInCents: coursesStore.selectedCourse.price * 100,
        reference: wompiStore.reference,
        publicKey: wompiStore.public_key,
      });
      checkout.open(function (result) {
        var transaction = result.transaction;
        wompiStore.transaction_id = transaction.id;
        // TODO: Send data to backend to verify payment, and navigate to verification page
        const transationData = {
          amount_in_cents: transaction.amountInCents,
          payment_method: transaction.paymentMethodType,
          reference: wompiStore.reference,
          referral: wompiStore.referral_code,
          schedule_id: schedule.id,
          wompi_id: wompiStore.transaction_id,
        };
        saveTransaction(transationData);
      });
    }
  } else {
    openRegistrationModal();
  }
};

const toggleVideoView = () => {
  showVideo.value = !showVideo.value;
};
</script>
<template>
  <div v-if="!error" class="md:w-[80%] w-[90%] mx-auto mt-10">
    <div class="md:flex">
      <div class="block md:w-9/12 md:mr-10">
        <div class="text-center relative space-y-2">
          <div class="flex justify-center">
            <div
              tabindex="0"
              :class="
                (showVideo ? 'collapse-open ' : 'collapse-close ') +
                'collapse bg-accent/40 rounded-xl transition-all'
              "
            >
              <div class="collapse-title text-xl font-medium">
                <div class="flex justify-between">
                  <span
                    @click="toggleVideoView"
                    class="text-base-100 my-auto bg-accent p-4 rounded-xl cursor-pointer hover:text-success"
                  >
                    <svg
                      v-if="!showVideo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                      />
                      <path
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                      />
                      <path
                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                      />
                      <path
                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                      />
                    </svg>
                  </span>
                  <h2
                    class="ml-6 md:text-xl text-left text-lg text-base-100 font-bold pt-2"
                  >
                    {{ coursesStore.selectedCourse.name }}
                  </h2>
                </div>
              </div>
              <div class="collapse-content">
                <VideoPlayer
                  src="https://productsimgs.s3.us-east-2.amazonaws.com/Sony+4K+Demo_+Another+World.mp4"
                  :poster="coursesStore.selectedCourse.thumbnail"
                />
              </div>
            </div>

            <!-- <div
              class="bg-black/60 z-10 absolute rounded-xl w-full md:h-[400px] h-[300px]"
            ></div>
            <img
              src="https://picsum.photos/1000/400"
              class="relative rounded-xl md:h-[400px] h-[300px] object-cover"
            /> -->
          </div>
        </div>

        <div class="md:flex justify-between mx-auto mt-6">
          <div class="block text-left md:w-full">
            <h2
              class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
            >
              Información del curso
            </h2>
            <p class="text-base-100 font-normal">
              {{ coursesStore.selectedCourse.description }}
            </p>
            <div
              class="card w-full bg-accent/40 text-primary-content mt-6 mb-12"
            >
              <div class="md:flex md:p-8 p-4">
                <div class="md:w-1/2 block">
                  <p class="md:text-lg text-md text-base-100 font-bold">
                    Precio normal:
                    <span class="line-through italic">
                      ${{ coursesStore.selectedCourse.price }} COP
                    </span>
                  </p>
                  <p class="md:text-3xl text-2xl text-success font-black">
                    ${{
                      coursesStore.selectedCourse.price -
                      coursesStore.selectedCourse.price * 0.1
                    }}
                    COP
                  </p>
                </div>
                <div class="divider my-2"></div>
                <div class="w-full">
                  <h2 class="card-title text-lg">
                    ¿Tienes un código de referido?
                  </h2>
                  <p class="text-sm">
                    Introduce aqui tu código de referido y obten un descuento en
                    tu compra.
                  </p>

                  <div class="form-control mt-4">
                    <label class="input-group">
                      <input
                        type="text"
                        v-model="referral_code"
                        placeholder="XYZA-22BA-9908-KUYO"
                        class="input bg-accent font-black text-success uppercase placeholder-base-100/20"
                      />
                      <span
                        class="btn bg-neutral hover:bg-primary font-bold cursor-pointer"
                        >Verificar</span
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <h2
          class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Contenido del curso
        </h2>
        <ul class="steps steps-vertical text-base-100">
          <li
            v-for="(item, key) in coursesStore.selectedCourse.content"
            :key="key"
            class="step cursor-default step-neutral"
          >
            <span class="text-left">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="md:flex justify-between mx-auto mt-6">
      <div class="block text-left md:w-full">
        <h2
          class="my-2 text-white text-xl font-black overflow-hidden whitespace-nowrap text-ellipsis w-auto"
        >
          Horarios disponibles
        </h2>
        <p class="text-base-100 font-normal mb-10">
          {{ coursesStore.selectedCourse.description }}
        </p>
      </div>
    </div>
    <div
      class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-6"
    >
      <div
        v-for="(nrc, key_ext) in coursesStore.selectedCourse.schedule"
        :key="key_ext"
        class="card w-full bg-accent/40 text-primary-content p-0 mb-4"
      >
        <div class="card-body px-4">
          <div class="md:flex">
            <div class="block lg:w-[90%] w-full">
              <h2 class="card-title text-lg text-left">
                Curso NRC: {{ nrc.id }}, by
                {{ nrc.teacher ? nrc.teacher.name : "Profesor Pendiente" }}
              </h2>
              <div v-if="nrc.teacher?.rating" class="rating space-x-2">
                <input
                  v-for="(i, key) in Math.floor(nrc.teacher?.rating)"
                  :key="key"
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <!-- <div class="w-auto lg:block hidden">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
            </div> -->
          </div>
          <div class="card-actions justify-start mt-4">
            <BaseCourseButton
              @click="payCourse(nrc)"
              :label="
                'Inscribirse - ' + coursesStore.selectedCourse.price + ' COP'
              "
            />
          </div>
          <p class="text-sm">{{ nrc.description }}</p>
          <div class="flex-grow border-t border-base-100/10 mb-2"></div>
          <h2 class="card-title text-lg">Horario de clases:</h2>

          <div class="carousel flex justify-start space-x-2">
            <div
              v-for="(session, day) in nrc.calendar"
              :key="day"
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
  </div>
  <div v-else class="relative h-screen flex justify-center">
    <div class="h-auto py-20">
      <div class="block mx-10">
        <h2 class="text-error text-2xl font-black text-center">
          Hubo un error al cargar el contenido del curso
        </h2>
        <p class="text-base-100/40 font-normal text-center">
          Por favor, vuelve a recargar la página.
        </p>
        <div class="my-8 space-y-2">
          <BaseCourseButton @click="reloadPage" label="Recargar página" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
