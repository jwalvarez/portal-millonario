<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Drawer from "./components/Drawer.vue";
</script>

<template>
<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <!-- TODO: Convert this as a separated component  -->
    <div class="sticky top-0 z-50 navbar bg-accent/70 backdrop-blur-xl px-48 py-4">
    <div class="flex-1">
      <div class="avatar placeholder">
        <div class="bg-base-100/10 text-neutral-content rounded-full w-12">
          <span class="text-xl">K</span>
        </div>
      </div>
      <router-link to="/" class="text-base-100 btn btn-ghost normal-case text-xl"
        >Portal Millonario</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0 text-base-100">
        <li class="flex-1 justify-end">
          <input type="text" placeholder="Buscar curso" class="bg-black/20 input w-full mx-4 my-auto h-10" />
        </li>
        <!-- data-tip="@jwalvarez" class="tooltip tooltip-bottom" -->
        
        <li class="flex justify-end">
          <div class="flex btn-ghost">
            <img class="w-10 mask mask-squircle object-contain p-0" src="https://api.lorem.space/image/shoes?w=160&h=160" />
            <div class="block">
              <p class="text-success font-bold normal-case text-sm -mb-2 py-0 w-full">Jhon Álvarez</p>
              <span an class="text-base-100/20 normal-case my-0 text-xs w-full">@jwalvez</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-none">
    <label for="my-drawer-4" class="btn btn-square btn-ghost text-base-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" class="inline-block w-8 h-8 stroke-current my-auto"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div>
  </div>
    <img class="absolute w-full -top-72" src="./assets/bg_hero.png">
    <router-view />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-4/12 bg-accent text-base-100">
      <!-- Sidebar content here -->
      <nav>
        <router-link class="text-lg text-base-100 font-bold" to="/">Cursos</router-link>&nbsp;
        <router-link class="text-lg text-base-100 font-bold" to="/goarbit">Goarbit</router-link>&nbsp;
      </nav>
      <li><a>Sidebar Item 1</a></li>&nbsp;
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
</template>

<style></style>
