<template>
  <div class="companyinfo" style="color: black">
    <SideBar>
      <div class="container" style="max-width: 50rem">
        <div class="card bg-dark" style="opacity: 0.8">
          <div
            class="card-body"
            v-for="deatil in company_details"
            :key="deatil.id"
          >
            <div class="card-title" style="color: white">
              Company name: {{ deatil.name }}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Company Phone number: {{ deatil.phone }}
              </li>
              <li class="list-group-item">
                Company Commercial record:
                {{ deatil.commercial_number }}
              </li>
              <li class="list-group-item">Company email: {{ deatil.email }}</li>
            </ul>
          </div>
        </div>
        <div
          class="m-3"
          style="opacity: 0.8"
          v-for="deatil in company_details"
          :key="deatil.id"
        >
          <div class="row">
            <div
              class="col-12 card bg-dark"
              v-for="user in deatil.users"
              :key="user.id"
            >
              <div class="card-body">
                <div class="card-title" style="color: white">
                  Users name: {{ user.name }}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    User Phone number: {{ user.phone }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  </div>
  <!-- background -->
  <img src="@/assets/Images/Background/Background3.jpg" class="bgimg" alt="" />
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import $store from "@/store/index";
import axios from "axios";
export default {
  data() {
    return {
      company_details: [],
    };
  },
  components: {
    SideBar,
  },
  methods: {
    loaddata() {
      const token = window.localStorage.getItem("token");
      axios({
        url:
          "https://1-taqdeer.com/ServicesProject/public/api/get-company/" +
          $store.state.id,
        method: "get",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          this.company_details = response.data;
        })
        .catch((error) => {
          window.alert(error.response);
        });
    },
  },
  beforeMount() {
    this.loaddata();
  },
};
</script>

<style scoped>
.card-title {
  font-size: 30px;
}

li {
  font-size: 20px;
  transition: 0.5s ease-out;
}

li:hover {
  color: white;
  background-color: #212529;
  transition: 0.5s ease-in;
}

@media screen and (max-width: 700px) {
  .card-title {
    font-size: 20px;
  }

  li {
    font-size: 15px;
  }
}
</style>
