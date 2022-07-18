<template>
  <div class="container mt-5">
    <div class="card px-4 mt-5 py-4">
      <table class="table bordered">
        <thead>
          <tr>
            <th scope="col">Nama Kategori</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in kategori" :key="index">
            <td>{{ item.nama_kategori }}</td>
            <td>
              <router-link
                class="btn btn-primary me-2"
                :to="{ name: 'edit', params: { id: item.id } }"
                >Edit</router-link
              >
              <button
                class="btn btn-danger"
                @click.prevent="destroy(item.id, index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      kategori: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/kategori").then((response) => {
      this.kategori = response.data.kategori;
    });
  },
  methods: {
    destroy(id, index) {
      axios
        .delete(`http://127.0.0.1:8000/api/kategori/${id}`)
        .then((res) => {
          this.$router.push("/kategori");
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Kategori Berhasil Dihapus",
            showConfirmButton: false,
            width: "19em",
            timer: 3000,
            toast: true,
            timerProgressBar: true,
          });
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>