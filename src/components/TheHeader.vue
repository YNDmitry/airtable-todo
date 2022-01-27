<template>
  <header
    role="header"
    class="header fixed top-0 left-0 right-0 px-6 py-2 bg-slate-900 text-white"
  >
    <div class="flex">
      <a><div>Airtable todo</div></a>
      <div class="ml-auto">
        <router-link to="/" class="mx-2">Home</router-link>
        <router-link to="/profile" class="mx-2">Profile</router-link>
        <router-link to="/login" class="mx-2">Log in</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>
