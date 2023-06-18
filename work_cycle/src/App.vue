<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #407bff;
    }
  }

  a:hover {
    color: #407bff;
  }
}
</style>
