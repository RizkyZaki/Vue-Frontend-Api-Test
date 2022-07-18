<template>
  <div class="container">
    <div class="card">
      <form @submit.prevent="update()">
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
        </div>
        <button class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      kategori: {},
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/kategori/${this.$route.params.id}`)
      .then((res) => {
        this.kategori = res.data.kategori;
      });
  },
  methods: {
    update() {
      axios
        .put(
          `http://127.0.0.1:8000/api/kategori/${this.$route.params.id}`,
          this.kategori
        )
        .then((res) => {
          this.$router.push("/kategori");
          this.$toast.success(res.data.message, {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissable: true,
            // all of other options may go here
          });
        });
    },
  },
};
</script>