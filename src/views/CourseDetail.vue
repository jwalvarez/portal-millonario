<script setup>
import axios from "axios";
import { ref } from "vue";

import CourseCard from "../components/CourseCard.vue";
import BaseCourseButton from "../components/base/BaseCourseButton.vue";
import BasePrimaryButton from "../components/base/BasePrimaryButton.vue";

import { useCoursesStore } from "../stores/course";
import { useWompiStore } from "../stores/wompi";
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";

const coursesStore = useCoursesStore();
const wompiStore = useWompiStore();
const authStore = useAuthStore();
const userStore = useUserStore();

const referral_code = ref("");

const verifyChecked = (index, number) => {
  Math.floor(number) == index ? "true" : "false";
};

async function getReference() {
  try {
    await axios
      .get("/api/v1/orchestrator/bill/get_reference/", {
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
  }
  // const time = new Date().getTime();
  // return "PRTLM-" + time;
}

const openRegistrationModal = () => {
  document.getElementById("registration-modal").classList.add("modal-open");
};

const saveTransaction = async (transaction) => {
  try {
    await axios
      .post(
        "https://portal-millonario.free.beeceptor.com/api/v1/courses_bought/",
        {
          headers: {
            Authorization: "Token " + localStorage.getItem("token"),
          },
          data: {
            transaction: transaction,
          },
        }
      )
      .then((response) => {
        // TODO: Navigate to verification page. Inject uri parameters to the url.
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
    console.log(userStore.first_name);
    const ref = await getReference();
    var checkout = new WidgetCheckout({
      currency: "COP",
      amountInCents: coursesStore.selectedCourse.price * 100,
      reference: wompiStore.reference,
      publicKey: wompiStore.public_key,
      redirectUrl: "https://transaction-redirect.wompi.co/check",
      // customerData: {
      //   // Opcional
      //   email: "jwalvarez.98@gmail.com",
      //   fullName: userStore.first_name + " " + userStore.last_name,
      //   phoneNumber: "3991111111",
      //   phoneNumberPrefix: "+57",
      //   legalId: "1007812345",
      //   legalIdType: "CC",
      // },
    });
    checkout.open(function (result) {
      var transaction = result.transaction;
      wompiStore.transaction_id = transaction.id;
      // TODO: Send data to backend to verify payment, and navigate to verification page
      const transationData = {
        transaction_id: transaction.id,
        reference: wompiStore.reference,
        course_id: coursesStore.selectedCourse.id,
        nrc_id: schedule.id,
        referral_code: wompiStore.referral_code,
      };
      saveTransaction(transationData);
    });
  } else {
    openRegistrationModal();
  }
};
</script>
<template>
  <div class="md:w-[80%] w-[90%] mx-auto">
    <div class="md:flex">
      <div class="block md:w-9/12 md:mr-10">
        <div class="text-center relative mt-14">
          <h2
            class="md:text-3xl text-left text-xl text-base-100 font-black mb-3"
          >
            🚀 {{ coursesStore.selectedCourse.name }}
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
            <p class="text-base-100 font-normal">
              {{ coursesStore.selectedCourse.description }}
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
            v-for="(item, idex) in coursesStore.selectedCourse.content"
            class="step cursor-default step-neutral"
          >
            <span class="text-left">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="card w-full bg-accent/40 text-primary-content mt-6 mb-12">
      <div class="flex p-10">
        <div class="w-2/3">
          <h2 class="card-title text-lg">
            Descuento del 50% en la compra del siguiente curso.
          </h2>
          <p class="text-sm">Aprovecha este descuento por tiempo limitado</p>
        </div>
        <div class="w-auto my-auto flex justify-end">
          <p class="text-4xl text-success font-black">
            ${{ coursesStore.selectedCourse.price }} COP
          </p>
        </div>
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
        <!-- TODO: Put course schedule here -->
      </div>
    </div>
    <!-- TODO: Create Schedule Cards -->
    <div
      class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 sm:gap-6 space-y-3"
    >
      <!-- TODO: Get user information from store or show registration form -->
      <div
        v-for="nrc in coursesStore.selectedCourse.schedule"
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
            <label class="input-group input-group-vertical">
              <span class="bg-accent text-base-100/20 py-2"
                >Código Referido</span
              >
              <input
                type="text"
                v-model="referral_code"
                placeholder="XYZA-22BA-9908-KUYO"
                class="input input-bordered bg-accent font-black text-success uppercase placeholder-base-100/20"
              />
            </label>
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

<style lang=""></style>
