<template>
  <div class="oreders">
    <SideBar>
      <div class="container">
        <div class="table-responsive" style="opacity: 0.8">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Compny name</th>
                <th>Phone number</th>
                <th>ID number</th>
                <th>Commercial record</th>
                <th>Email</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="company in companies" :key="company.id">
                <td>{{ company.name }}</td>
                <td>{{ company.phone }}</td>
                <td>{{ company.ID_number }}</td>
                <td>{{ company.commercial_number }}</td>
                <td>{{ company.email }}</td>
                <td>
                  <button class="btn btn-primary" @click="accepted(company.id)">
                    Accept
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" @click="rejected(company.id)">
                    reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SideBar>
  </div>
  <!-- background -->
  <img src="@/assets/Images/Background/Background3.jpg" class="bgimg" alt="" />
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import router from "@/router";
import axios from "axios";
export default {
  name: "OrdersView",
  data() {
    return {
      companies: [],
    };
  },
  components: {
    SideBar,
  },
  methods: {
    getorders() {
      const token = window.localStorage.getItem("token");
      axios({
        method: "get",
        url: "https://1-taqdeer.com/ServicesProject/public/api/get-all-orders",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          this.companies = response.data;
        })
        .catch(function (error) {
          window.alert(error.response);
        });
    },
    accepted(id) {
      const token = window.localStorage.getItem("token");
      axios({
        method: "post",
        url: "https://1-taqdeer.com/ServicesProject/public/api/acc-rej/" + id,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          status: 1,
        },
      })
        .then((response) => {
          window.alert(response.data);
          router.go(router.currentRoute);
        })
        .catch((error) => {
          window.alert(error.response.data.message);
        });
    },
    rejected(id) {
      const token = window.localStorage.getItem("token");
      axios({
        method: "post",
        url: "https://1-taqdeer.com/ServicesProject/public/api/acc-rej/" + id,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          status: 0,
        },
      })
        .then((response) => {
          window.alert(response.data);
          router.go(router.currentRoute);
        })
        .catch((error) => {
          window.alert(error.response.data.message);
        });
    },
  },
  beforeMount() {
    this.getorders();
  },
};
</script>
