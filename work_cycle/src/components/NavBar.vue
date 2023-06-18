<template>
  <nav>
    <router-link to="/login" class="d-flex justify-content-flex-start"
      >Login</router-link
    >
    <router-link to="/">Home</router-link>
    |
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>
