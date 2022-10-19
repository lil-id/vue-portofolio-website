<script setup>
import { userMail } from "../stores/formData";
const user = userMail();
</script>

<template>
  <h1 class="text-title">
    <span class="text-primary fw-bold">Contact</span> Me
  </h1>
  <section class="text-right container">
    <div class="row">
      <div
        class="text-header-container col-lg-6 col-md-8 me-auto ms-auto mt-auto"
      >
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                type="text"
                class="form-control"
                v-model="user.data.name"
                placeholder="Your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                v-model="user.data.email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Message</label
              >
              <textarea
                class="form-control"
                v-model="user.data.message"
                placeholder="Type your message"
                rows="3"
              ></textarea>
            </div>
            <div class="d-flex justify-content-center">
              <button v-on:click="user.show()" class="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.text-title {
  margin-top: 70px;
  text-align: center;
}
</style>
