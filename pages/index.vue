<template>
  <div id="__nuxt">
    <!---->
    <div id="__layout">
      <div>
        <div class="d-flex justify-content-center vh-100">
          <div class="d-flex align-items-center vw-100">
            <div class="p-3 card w-100">
              <div class="overflow-y" style="height: 70vh">
                <div>
                  <div class="text-center">
                    <h1 class="mb-5">Yhido Sandbox</h1>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="Judul Buku"
                          class="form-control"
                          v-model="judul"
                          style="height: 50px"
                        />
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-primary ml-3"
                            style="width: 50px"
                            @click="tambahJudul"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div v-if="isNotJudul"></div>
                      <ul class="list-group list-group-flush mt-3" type="buku">
                        <li
                          v-for="(item, i) in listJudul"
                          :key="i"
                          class="list-group-item d-flex justify-content-between align-items-center"
                          style="padding: 0.75rem 0.25rem"
                        >
                          {{ item }}
                          <button
                            class="btn btn-danger"
                            @click="deleteJudul(i)"
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div v-if="isNotPembaca"></div>
                    <div class="col-md-4">
                      <div class="input-group">
                        <input
                          type="text"
                          placeholder="Nama Pembaca"
                          class="form-control"
                          style="height: 50px"
                          v-model="pembaca"
                        />
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-primary ml-3"
                            style="width: 50px"
                            @click="tambahPembaca"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <ul
                        class="list-group list-group-flush mt-3"
                        type="pembaca"
                      >
                        <li
                          v-for="(item, i) in listPembaca"
                          :key="i"
                          class="list-group-item d-flex justify-content-between align-items-center"
                          style="padding: 0.75rem 0.25rem"
                        >
                          {{ item }}
                          <button class="btn btn-danger">
                            <i
                              class="fas fa-minus"
                              @click="deletePembaca(i)"
                            ></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <div class="input-group">
                        <div style="width: 85%">
                          <select v-model="selected" class="form-control mb-3">
                            <option
                              v-for="(item, i) in listJudul"
                              :key="i"
                              :value="i"
                            >
                              {{ item }}
                            </option>
                          </select>
                          <select v-model="selected" class="form-control">
                            <option v-for="(item, i) in listPembaca" :key="i">
                              {{ item }}
                            </option>
                          </select>
                        </div>
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-primary ml-3"
                            style="width: 50px"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <ul
                        class="list-group list-group-flush mt-3"
                        type="riwayat baca"
                      >
                        <li
                          class="list-group-item d-flex justify-content-between align-items-center"
                          style="padding: 0.75rem 0.25rem"
                        >
                          <button class="btn btn-danger">
                            <i class="fas fa-minus"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {},
  data() {
    return {
      listJudul: [],
      listPembaca: [],
      judul: "",
      pembaca: "",
    };
  },
  computed: {
    isNotJudul() {
      return this.listJudul.length == 0;
    },
    isNotPembaca() {
      return this.listPembaca.length == 0;
    },
  },
  methods: {
    tambahJudul() {
      this.listJudul.push(this.judul);
      this.judul = "";
    },
    deleteJudul() {
      this.listJudul.splice(this.judul, 1);
    },
    tambahPembaca() {
      this.listPembaca.push(this.pembaca);
      this.pembaca = "";
    },
    deletePembaca() {
      this.listPembaca.splice(this.pembaca, 1);
    },
  },
};
</script>
