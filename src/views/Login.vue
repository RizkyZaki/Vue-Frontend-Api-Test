<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card px-5 py-5 shadow-lg">
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
          <h1>Login</h1>
          <form id="form" @submit.prevent="login()">
            <input
              type="email"
              placeholder="Your Email"
              class="mb-3 form-control"
              v-model="user.email"
            />
            <input
              type="password"
              placeholder="Your password"
              class="mb-3 form-control"
              v-model="user.password"
            />
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
      error: "",
    };
  },
  methods: {
    login() {
      let dataForm = new FormData(form);
      axios
        .post("http://127.0.0.1:8000/api/auth/login", this.user)
        .then((res) => {
          this.$toast.success("successfulyy Logged In", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissable: true,
            // all of other options may go here
          });
          this.$route.push("/dashboard");
          // console.log(res);
        })
        .catch((err) => {
          this.error = err.response.data.error;
        });
    },
  },
};
</script>