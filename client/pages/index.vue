<template>
  <div class="flex">
    <div
      class="card-doctor"
      v-for="doctor in doctors"
      :key="doctor.id"
      @click="$router.push(`/doctor/${doctor._id}`)">
      <img :src="doctor.imageUrl" alt="" class="card-doctor__image">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  async asyncData() {
    const response = await fetch('http://localhost:3000/api/v1/doctors');
    const doctors = await response.json();

    return {
      doctors
    }
  },

  data() {
    return {
      doctors: null,
    }
  },
})
</script>

<style scoped>
  .flex {
    display: flex;
    column-gap: 15px;
  }

  .card-doctor {
    width: 150px;
    height: 230px;
    border-radius: 15px;
    border: 2px solid red;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
  }

  .card-doctor:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }

  .card-doctor__image {
    width: 100%;
    height: 100%;
  }
</style>
