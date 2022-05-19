<template>
  <img class="absolute w-full -top-72" src="./assets/bg_hero.png">
  <!-- <div class="absolute">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"
      style="opacity: 1;">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: rgb(247, 0, 181);"></stop>
          <stop offset="100%" style="stop-color: rgb(247, 0, 181);"></stop>
        </linearGradient>
      </defs>
      <path id="blob" fill="url(#gradient)" style="opacity: 1;">
        <animate attributeName="d" dur="25000ms" repeatCount="indefinite"
          values="M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z">
        </animate>
      </path>
    </svg>
  </div> -->
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" :checked="checked" />
    <div class="drawer-content">
      <!-- Page content here -->
      <!-- TODO: Convert this as a separated component  -->
      <div class="sticky top-0 z-50 navbar bg-accent/10 backdrop-blur-xl px-48 py-1">
        <div class="flex-1">
          <div class="avatar placeholder">
            <div class="bg-base-100/10 text-neutral-content rounded-full w-12">
              <span class="text-xl">K</span>
            </div>
          </div>
          <router-link to="/" class="text-base-100 btn btn-ghost normal-case text-xl">Portal Millonario</router-link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 text-base-100">
            <li class="flex-1 justify-end">
              <input type="text" placeholder="Buscar curso" class="bg-black/20 input w-full mx-4 my-auto h-10" />
            </li>
            <!-- data-tip="@jwalvarez" class="tooltip tooltip-bottom" -->

            <li class="flex justify-end">
              <div class="flex btn-ghost">
                <img class="w-10 mask mask-squircle object-contain p-0"
                  src="https://api.lorem.space/image/shoes?w=160&h=160" />
                <div class="block">
                  <router-link to="/login" class="text-success font-bold normal-case text-sm -mb-2 py-0 w-full">Iniciar
                    sesión</router-link>
                  <!-- <span an class="text-base-100/20 normal-case my-0 text-xs w-full">@jwalvez</span> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-none">
          <!-- for="my-drawer-4" -->
          <label @click="togleMenu" class="btn btn-square btn-ghost text-base-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26"
              class="inline-block w-8 h-8 stroke-current my-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
      </div>
      <router-view />
    </div>
    <div class="drawer-side">
      <!-- for="my-drawer-4" -->
      <label @click="togleMenu" class="drawer-overlay"></label>
      <div class="menu overflow-y-auto w-4/12 bg-accent pt-8">
        <!-- Sidebar content here -->
        <nav class="p-10 grid grid-cols-2">
          <router-link v-for="(item, index) in menu" :to="{ path: item.url }" :key="index" @click="togleMenu" s
            class="p-8 mr-4 mb-4 bg-base-100/10 rounded-xl text-lg text-base-100 font-bold hover:bg-success hover:underline cursor-pointer transition-all duration-300">
            <div>
              {{ item.title }}
            </div>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Drawer from "./components/Drawer.vue";
export default {
  components: {
    Nav,
    Drawer
  },
  data() {
    return {
      checked: false,
      menu: [
        {
          title: "Cursos",
          url: "/"
        },
        {
          title: "Goarbit",
          url: "/goarbit"
        },
        {
          title: "Publicidad",
          url: "/goarbit"
        },
      ]
    }
  },
  methods: {
    togleMenu: function () {
      this.checked = !this.checked;
    },
  }
}

</script>


<style>
</style>
