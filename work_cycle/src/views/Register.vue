<template>
  <div class="register-vue">
    <NavBar></NavBar>
    <!-- form -->
    <div>
      <div class="container">
        <div class="content">
          <div class="card">
            <form @submit.prevent="register()">
              <div class="login_form form-group">
                <h1 class="text_align">welcome to work cycle application</h1>
                <h3 class="text_align">
                  If you want to be part of this application please register now
                </h3>
                <div class="login_form form-group">
                  <input
                    type="text"
                    placeholder="Enter company name"
                    v-model="company_name"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group">
                  <input
                    type="text"
                    v-model="phnum"
                    placeholder="Enter phone number"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group">
                  <input
                    type="text"
                    v-model="comm_num"
                    placeholder="Enter Commercial Record"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group">
                  <input
                    type="text"
                    v-model="idnum"
                    placeholder="Enter ID Number"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter E-mail"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group d-flex align-items-center">
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Enter your password"
                    class="form-control login_inp"
                    id="id_password"
                    required
                  />
                  <Icon
                    icon="solar:eye-broken"
                    color="rgb(150, 150, 150)"
                    id="togglePassword"
                    style="margin-left: -30px; z-index: 2; cursor: pointer"
                    @click="showpass(1)"
                  />
                </div>
                <div class="login_form form-group d-flex align-items-center">
                  <input
                    type="password"
                    v-model="confpassword"
                    placeholder="Confirm your password"
                    class="form-control login_inp"
                    id="id_confpassword"
                    required
                  />
                  <Icon
                    icon="solar:eye-broken"
                    color="rgb(150, 150, 150)"
                    id="toggleconfPassword"
                    style="margin-left: -30px; z-index: 2; cursor: pointer"
                    @click="showpass(0)"
                  />
                </div>
                <div class="login_form form-group">
                  <input
                    type="text"
                    v-model="num_users"
                    placeholder="Enter number of users"
                    class="form-control login_inp"
                    required
                  />
                </div>
                <div class="login_form form-group">
                  <button type="submit" class="btn btn-primary form-control">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Background -->
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
  name: "register-vue",
  data() {
    return {
      url_route: "",
      company_name: "",
      phnum: "",
      comm_num: "",
      idnum: "",
      email: "",
      password: "",
      confpassword: "",
      num_users: "",
    };
  },
  components: {
    NavBar,
    Icon,
  },
  methods: {
    showpass(e) {
      const password = document.getElementById("id_password");
      const confpassword = document.getElementById("id_confpassword");
      const icon1 = document.getElementById("togglePassword");
      const icon2 = document.getElementById("toggleconfPassword");

      if (e == 1) {
        if (password.getAttribute("type") == "password") {
          password.setAttribute("type", "text");
          icon1.style.color = "rgb(240, 240, 240)";
        } else {
          password.setAttribute("type", "password");
          icon1.style.color = "rgb(150, 150, 150)";
        }
      } else {
        if (confpassword.getAttribute("type") == "password") {
          confpassword.setAttribute("type", "text");
          icon2.style.color = "rgb(240, 240, 240)";
        } else {
          confpassword.setAttribute("type", "password");
          icon2.style.color = "rgb(150, 150, 150)";
        }
      }
    },
    register: function () {
      if (this.password == "") {
        window.alert("password is empty");
        return;
      } else if (this.confpassword == "") {
        window.alert("confirm passwod is empty");
        return;
      } else if (this.password != this.confpassword) {
        window.alert("password don't match");
        return;
      } else {
        axios({
          method: "post",
          url: "https://1-taqdeer.com/ServicesProject/public/api/add-company",
          data: {
            name: this.company_name,
            phone: this.phnum,
            commercial_number: this.comm_num,
            ID_number: this.idnum,
            email: this.email,
            password: this.password,
            num_of_users: this.num_users,
          },
        })
          .then(function (response) {
            window.alert(response.data.name + " regestir succesful");
            router.push("/");
          })
          .catch(function (error) {
            window.alert(error.response.data.message);
          });
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>
