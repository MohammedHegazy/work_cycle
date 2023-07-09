<template>
  {{ sidebar() }}
  <div class="sidebar">
    <div id="wrapper">
      <div class="overlay"></div>

      <!-- Sidebar -->
      <nav
        class="navbar navbar-inverse fixed-top"
        id="sidebar-wrapper"
        role="navigation"
      >
        <ul class="nav sidebar-nav">
          <div class="sidebar-header">
            <div class="sidebar-brand">
              <a href="#"
                ><img
                  src="@/assets/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.png"
                  alt=""
                  style="height: 100px; width: 100px"
              /></a>
            </div>
          </div>
          <li class="d-flex justify-content-start">
            <RouterLink to="/home">
              <Icon icon="mdi:company" width="25" height="25" />
              Companies</RouterLink
            >
          </li>
          <li class="d-flex justify-content-start">
            <RouterLink to="/orders">
              <Icon
                icon="material-symbols:order-approve-outline"
                width="25"
                height="25"
              />
              Orders</RouterLink
            >
          </li>
          <li class="d-flex justify-content-start">
            <RouterLink to="/login" @click="cleartoken()">
              <Icon icon="grommet-icons:logout" width="25" height="25" />
              Logut</RouterLink
            >
          </li>
        </ul>
      </nav>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <button
          type="button"
          class="hamburger animated fadeInLeft is-closed"
          data-toggle="offcanvas"
        >
          <span class="hamb-top"></span>
          <span class="hamb-middle"></span>
          <span class="hamb-bottom"></span>
        </button>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-lg-offset-2">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "SideBar",
  components: {
    Icon,
  },
  methods: {
    sidebar() {
      window.$(document).ready(function () {
        var trigger = window.$(".hamburger"),
          overlay = window.$(".overlay"),
          isClosed = false;

        trigger.click(function () {
          hamburger_cross();
        });

        function hamburger_cross() {
          if (isClosed == true) {
            overlay.hide();
            trigger.removeClass("is-open");
            trigger.addClass("is-closed");
            isClosed = false;
          } else {
            overlay.show();
            trigger.removeClass("is-closed");
            trigger.addClass("is-open");
            isClosed = true;
          }
        }

        window.$('[data-toggle="offcanvas"]').click(function () {
          window.$("#wrapper").toggleClass("toggled");
        });
      });
    },
    cleartoken() {
      window.localStorage.removeItem("token");
    },
  },
  mounted() {
    this.sidebar();
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}
</style>
