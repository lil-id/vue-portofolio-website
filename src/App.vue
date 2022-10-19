<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold ms-5" href="#">MyPorto</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse me-5 ms-5" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item ms-2">
            <RouterLink id="project" class="link" to="/project"
              >Project</RouterLink
            >
          </li>
          <li class="nav-item ms-2">
            <RouterLink id="contact" class="link" to="/contact"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins";
}

.navbar {
  background-color: #0d6efd;
}

.navbar-brand {
  font-size: 25px;
  margin-top: 8px;
}

.link {
  text-decoration: none;
  font-weight: 400;
  color: rgb(28, 26, 26);
}

.link:hover {
  color: #0d6efd;
  font-weight: 600;
}
</style>
