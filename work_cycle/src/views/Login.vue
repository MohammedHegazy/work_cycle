<template>
  <div class="login">
    <NavBar></NavBar>
    <!-- form -->
    <div>
      <div class="container">
        <div class="content">
          <div class="card">
            <form @submit.prevent="login()">
              <div class="login_form form-group">
                <h1 class="text_align">welcome to work cycle application</h1>
                <h3 class="text_align">Login as superadmin</h3>
                <div class="login_form form-group">
                  <input
                    name="number"
                    type="text"
                    placeholder="Enter Phone number"
                    class="form-control login_inp"
                    v-model="phnum"
                    required
                  />
                </div>
                <div class="login_form form-group d-flex align-items-center">
                  <input
                    name="password"
                    type="password"
                    id="id_password"
                    placeholder="Enter your password"
                    class="form-control login_inp"
                    v-model="password"
                    required
                  />
                  <Icon
                    icon="solar:eye-broken"
                    color="rgb(150, 150, 150)"
                    id="togglePassword"
                    style="margin-left: -30px; z-index: 2; cursor: pointer"
                    @click="showpass()"
                  />
                </div>
                <div class="login_form form-group">
                  <button type="submit" class="btn btn-primary form-control">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- background -->
    <img
      src="@/assets/Images/Background/Background2.jpeg"
      alt=""
      class="bgimg"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import router from "@/router";
import axios from "axios";
import { Icon } from "@iconify/vue";

export default {
  name: "login-vue",
  data() {
    return {
      phnum: "",
      password: "",
      route: "",
    };
  },
  components: {
    NavBar,
    Icon,
  },
  methods: {
    showpass() {
      const password = document.getElementById("id_password");
      const icon1 = document.getElementById("togglePassword");
      if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text");
        icon1.style.color = "rgb(240, 240, 240)";
      } else {
        password.setAttribute("type", "password");
        icon1.style.color = "rgb(150, 150, 150)";
      }
    },
    login() {
      axios({
        method: "post",
        url: "https://1-taqdeer.com/ServicesProject/public/api/user-login",
        data: {
          phone: this.phnum,
          password: this.password,
        },
      })
        .then(function (response) {
          if (response.data.role == "super_admin") {
            router.push("/home");
            window.localStorage.setItem("token", response.data.token);
          } else {
            window.alert("Sorry this dashboard is just for super admin");
          }
        })
        .catch(function (error) {
          router.push("/login");
          window.alert(error.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>
