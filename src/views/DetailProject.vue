<script>
import axios from "axios";
import moment from "moment";

const API_URL = "https://api.github.com/users/lil-id";
const API_URL_PROJECT = "https://api.github.com/users/lil-id/repos";

export default {
  data() {
    return {
      page: 1,
      perPage: 100,
      users: {},
      projects: {},
    };
  },

  async created() {
    try {
      const user = await axios.get(API_URL);
      this.users = user.data;
      const project = await axios.get(
        `${API_URL_PROJECT}?per_page=${this.perPage}&page=${this.page}`
      );
      this.projects = project.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    dateTime(value) {
      return moment(value).format("DD MMMM YYYY");
    },
  },
};
</script>
<template>
  <div class="container">
    <main>
      <div class="text-header">
        <h1 class="fw-bold text-primary">Detail Project</h1>
      </div>
      <hr class="mb-5" />

      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-first">
          <div class="card shadow-sm mb-5">
            <img
              class="image-card mt-5"
              :src="this.users.avatar_url"
              alt="profile photo"
            />
            <div class="card-body">
              <h2 class="text-center">{{ this.users.name }}</h2>
              <hr class="my-4" />
              <div class="card-text">
                <p>
                  <b class="text-success">Repositori:</b> {{ this.users.login }}
                </p>
                <div>
                  <b class="text-success">Deskripsi:</b>
                  <p>{{ this.users.bio }}</p>
                </div>
                <p>
                  <b class="text-success">Blog: </b>
                  <a
                    class="link-blog"
                    :href="`${this.users.blog}`"
                    target="blank"
                  >
                    {{ this.users.blog }}</a
                  >
                </p>
                <p>
                  <b class="text-success">Lokasi:</b> {{ this.users.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8">
          <div v-for="(key, value) in projects" :key="key">
            <div v-if="this.projects[value].id == this.$route.params.id">
              <form class="needs-validation mb-5 mt-3">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label fw-bold"
                      >Repository name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      :value="`${this.projects[value].full_name}`"
                      readonly
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label fw-bold"
                      >Project name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      :value="`${this.projects[value].name}`"
                      readonly
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12" v-if="this.projects[value].homepage">
                    <label for="homepage" class="form-label fw-bold"
                      >Home Page</label
                    >
                    <div class="input-group has-validation">
                      <a
                        type="text"
                        class="form-control link-blog"
                        :value="`${this.projects[value].description}`"
                        readonly
                        :href="`${this.projects[value].homepage}`"
                        target="_blank"
                      >
                        {{ this.projects[value].homepage }}
                      </a>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="repository" class="form-label fw-bold"
                      >Repository URL</label
                    >
                    <div class="input-group has-validation">
                      <a
                        type="text"
                        class="form-control link-blog"
                        :value="`${this.projects[value].description}`"
                        readonly
                        :href="`${this.projects[value].html_url}`"
                        target="_blank"
                      >
                        {{ this.projects[value].html_url }}
                      </a>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="username" class="form-label fw-bold"
                      >Details</label
                    >
                    <div class="input-group has-validation">
                      <input
                        type="text"
                        class="form-control"
                        :value="`${this.projects[value].description}`"
                        readonly
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label fw-bold"
                      >Language</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :value="`${this.projects[value].language}`"
                      readonly
                    />
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label fw-bold"
                      >Default branch</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :value="`${this.projects[value].default_branch}`"
                      readonly
                    />
                  </div>

                  <div class="col-12">
                    <label for="address2" class="form-label fw-bold"
                      >Clone project</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :value="`git clone ${this.projects[value].clone_url}`"
                      readonly
                    />
                  </div>

                  <div class="col-md-5">
                    <label for="created" class="form-label fw-bold"
                      >Create</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :value="`${dateTime(this.projects[value].created_at)}`"
                      readonly
                    />
                  </div>

                  <div class="col-md-4">
                    <label for="push" class="form-label fw-bold">Push</label>
                    <input
                      type="text"
                      class="form-control"
                      :value="`${dateTime(this.projects[value].pushed_at)}`"
                      readonly
                    />
                  </div>

                  <div class="col-md-3">
                    <label for="update" class="form-label fw-bold"
                      >Update</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      :value="`${dateTime(this.projects[value].updated_at)}`"
                      readonly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.text-header {
  margin-top: 5%;
  margin-bottom: 5%;
}

.image-card {
  width: 90%;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 10%;
}

.link-blog {
  color: blue;
  text-decoration: none;
}
</style>
