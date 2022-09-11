<template>
  <div>
    <h1>Doctor {{ doctor.name }}</h1>
    <h3>my number is {{ doctor._id }}</h3>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const response = await fetch(`http://localhost:3000/api/v1/doctors/${params.id}`);
    const doctor = await response.json();

    return {
      doctor
    }
  },

  data () {
    return {
      doctor: null,
    }
  }
}
</script>
