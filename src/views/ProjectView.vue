<script>
import axios from "axios";

const API_URL = "https://api.github.com/users/lil-id/repos";

export default {
  data() {
    return {
      projects: [],
      page: 1,
      perPage: 10,
      loading: false,
      allLoaded: false, // to prevent endless requests
    };
  },

  mounted() {
    this.loadProjects();

    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    async loadProjects() {
      if (this.loading || this.allLoaded) return;

      this.loading = true;
      try {
        const res = await axios.get(
          `${API_URL}?per_page=${this.perPage}&page=${this.page}`
        );
        const data = res.data;

        if (data.length === 0) {
          this.allLoaded = true; // No more data
        } else {
          this.projects.push(...data);
          this.page += 1;
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        this.loading = false;
      }
    },

    handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.offsetHeight - 100;

      if (scrollPosition >= threshold) {
        this.loadProjects();
      }
    },
  },
};
</script>

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
        <div class="col" v-for="project in projects" :key="project.id">
          <div class="card shadow-sm">
            <img
              class="image-card"
              src="https://ih1.redbubble.net/image.4700837696.3089/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              alt="profile photo"
            />
            <div class="card-body">
              <h4>{{ project.name }}</h4>
              <p class="card-text">{{ project.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <RouterLink :to="`/project/${project.id}`">
                  <button type="button" class="btn btn-sm btn-success">
                    View Project
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="loading" class="text-center my-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-if="allLoaded" class="text-center text-muted my-4">
        <span>No more projects to load.</span>
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
