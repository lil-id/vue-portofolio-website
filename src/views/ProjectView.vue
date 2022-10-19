<script>
import axios from "axios";

const API_URL = "https://api.github.com/users/lil-id/repos";

export default {
  data() {
    return {
      projects: [],
    };
  },

  async created() {
    try {
      const res = await axios.get(API_URL);
      this.projects.push(...res.data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="background album py-5">
    <div class="container mb-2">
      <h1 class="text-header fw-bold text-primary">Projects</h1>
      <p class="info-header text-center text-muted mt-3 mb-5">
        "These are some of the projects I made while learning programming and
        <br />
        there are also some learning resources"
      </p>
      <div id="card" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(key, value) in projects" :key="key">
          <div class="card shadow-sm">
            <div class="card-body">
              <h4>{{ this.projects[value].name }}</h4>
              <p class="card-text">
                {{ this.projects[value].description }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <RouterLink :to="`/project/${this.projects[value].id}`">
                  <button type="button" class="btn btn-sm btn-success">
                    View Project
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.info-header {
  font-size: 20px;
}

.background {
  background-color: white;
}

.text-header {
  text-align: center;
}
</style>
