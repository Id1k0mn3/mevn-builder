<template>
  <div class="hello">
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup() {
    const menuItems = null;

    return {
      menuItems,
    }
  },

  mounted() {
    console.log(this.menuItems);
  }

}
</script>