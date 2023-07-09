<template>
  <div class="dashboard">
    <SideBar>
      <div class="container">
        <div class="grey-bg container-fluid">
          <section id="minimal-statistics">
            <div class="row">
              <div
                class="col-xl-3 col-sm-6 col-12 p-card"
                v-for="company in Companies"
                :key="company.name"
              >
                <RouterLink to="/companyinfo" @click="changeid(company.id)">
                  <div class="card my_card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="align-self-center valign-self-right">
                            <Icon
                              icon="mdi:company"
                              color="royalblue"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div
                            class="media-body"
                            style="text-align: right; width: 100%"
                          >
                            <h3>{{ company.name }}</h3>
                            <span>Users:{{ company.num_of_users }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SideBar>
  </div>
  <!-- background -->
  <img src="@/assets/Images/Background/Background3.jpg" class="bgimg" alt="" />
</template>

<script>
import { Icon } from "@iconify/vue";
import SideBar from "@/components/SideBar.vue";
import $store from "@/store/index";
import axios from "axios";
export default {
  name: "DashBoard",
  data() {
    return {
      Companies: [],
    };
  },
  components: {
    SideBar,
    Icon,
  },
  methods: {
    changeid(cmid) {
      $store.state.id = cmid;
    },
    getdata() {
      const token = window.localStorage.getItem("token");
      axios({
        url: "https://1-taqdeer.com/ServicesProject/public/api/get-companies",
        method: "get",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((respnose) => {
          this.Companies = respnose.data;
        })
        .catch((error) => {
          window.alert(error.respnose);
        });
    },
  },
  beforeMount() {
    this.getdata();
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
}

i {
  font-size: 40px;
}

.p-card {
  padding-bottom: 20px;
}

.my_card {
  background-color: rgb(220, 220, 220);
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: #858796;
}

a,
a:visited,
a:link,
a:active {
  transition: ease-out 0.5s;
}

a:hover {
  transition: ease-in 0.5s;
  color: #000066;
}
</style>
