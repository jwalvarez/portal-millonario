<template>
  <div class="sticky top-0 z-50 navbar bg-accent px-52 py-4">
    <div class="flex-1">
      <div class="avatar placeholder">
        <div class="bg-base-100/10 text-neutral-content rounded-full w-12">
          <span class="text-xl">K</span>
        </div>
      </div>
      <a class="text-base-100 btn btn-ghost normal-case text-xl">Portal Millonario</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0 text-base-100">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a>
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2 bg-accent text-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="flex-none">
      <button for="my-drawer-4" class="btn btn-square btn-ghost text-base-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
