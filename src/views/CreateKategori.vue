<template>
  <div class="container">
    <div class="card">
      <form @submit.prevent="KategoriSubmit()">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            v-model="kategori.nama_kategori"
          />
          <div v-if="validation.nama_kategori" class="mt-2 alert alert-danger">
            {{ validation.nama_kategori[0] }}
          </div>
        </div>
        <button class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      kategori: {},
      validation: {},
    };
  },
  methods: {
    KategoriSubmit() {
      let url = "http://127.0.0.1:8000/api/kategori";
      axios
        .post(url, this.kategori)
        .then((response) => {
          this.$router.push("/kategori");
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Kategori Berhasil Dibuat",
            showConfirmButton: false,
            width: "40px",
            timer: 3000,
            timerProgressBar: true,
          });
          // console.log(response);
        })
        .catch((error) => {
          this.validation = error.response.data;
        });
    },
  },
};
</script>