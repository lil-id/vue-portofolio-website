<script>
import axios from "axios";

const API_URL = "https://api.github.com/users/lil-id/repos";

export default {
  data() {
    return {
      page: 1,
      perPage: 100,
      projects: [],
    };
  },

  async created() {
    try {
      const res = await axios.get(`${API_URL}?per_page=${this.perPage}&page=${this.page}&sort=updated&direction=desc`);
      this.projects.push(...res.data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="py-5 text-right container">
    <div class="row py-lg-5">
      <div class="text-header-container col-lg-6 col-md-8 me-auto">
        <h1 class="greeting fw-bold">Hello! I Am</h1>
        <h1 class="username">Kholil Haq Alim Hakim</h1>
        <p class="lead text-muted mt-4">
          3nd year IT student who is active in the campus community and outside
          campus who likes learning and challenges. Have an interest in web
          development and cloud computing as evidenced by several certificates.
        </p>
        <a href="#card" class="btn btn-primary mt-2 mb-4">Latest Projects</a>
      </div>
      <div class="col-lg-5 order-lg-2">
        <img class="myPhoto" src="../assets/myPhoto.jpg" alt="" srcset="" />
      </div>
    </div>
    <h1 class="text-center">
      <span class="fw-bold text-primary">Latest</span> Projects
    </h1>
    <div id="card" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" v-for="(key, value) in projects.slice(0, 3)" :key="key">
        <div class="card shadow-sm">
          <img
            class="image-card"
            src="https://ih1.redbubble.net/image.4700837696.3089/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
            alt="profile photo"
          />
          <div class="card-body">
            <h4>{{ this.projects[value].name }}</h4>
            <p class="card-text">
              {{ this.projects[value].description }}
            </p>
            <RouterLink :to="`/project/${this.projects[value].id}`">
              <button type="button" class="btn btn-sm btn-success">
                View Project
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins";
}

.btn {
  padding: 10px;
  border-radius: 8px;
  font-weight: 500;
}

.text-header-container {
  margin-top: 7%;
}

.greeting {
  font-size: 50px;
}

.username {
  font-size: 50px;
  font-weight: bold;
  color: #0d6efd;
}

.myPhoto {
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
}

.text-center {
  margin-top: 10%;
}

.card {
  padding: 20px;
  margin-top: 12%;
}

.image-card {
  padding: 15px 0;
}
</style>
