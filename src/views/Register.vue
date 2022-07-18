<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card px-5 py-5 shadow-lg">
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
          <h1>Register</h1>
          <form id="form" @submit.prevent="register()">
            <input
              type="email"
              placeholder="Your Email"
              class="mb-3 form-control"
              v-model="user.email"
            />
            <p class="text-danger" v-if="validation.email">
              {{ validation.email[0] }}
            </p>
            <input
              type="text"
              placeholder="Your Name"
              class="mb-3 form-control"
              v-model="user.name"
            />
            <p class="text-danger" v-if="validation.name">
              {{ validation.name[0] }}
            </p>
            <input
              type="password"
              placeholder="Your password"
              class="mb-3 form-control"
              v-model="user.password"
            />
            <p class="text-danger" v-if="validation.password">
              {{ validation.password[0] }}
            </p>
            <p>
              Have Account?
              <router-link to="/login">Click Here</router-link>
            </p>
            <button class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      validation: {},
    };
  },
  methods: {
    register() {
      let dataForm = new FormData(form);
      axios
        .post("http://127.0.0.1:8000/api/auth/register", this.user)
        .then((res) => {
          this.$toast.success("Register Succesfully", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissable: true,
            // all of other options may go here
          });
          this.$router.push("/login");
          // console.log(res);
        })
        .catch((err) => {
          this.validation = err.response.data;
        });
    },
  },
};
</script>