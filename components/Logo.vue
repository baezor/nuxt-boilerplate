<style lang="scss">
.logo {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
<template>
  <router-link to="'/'" class="logo" v-html="content"></router-link>
</template>
<script>
  export default {
    props: {
    },
    data() {
      return {
        content: 'Bitter/<br>end',
      };
    },
    computed: {},
    methods: {},
  };
</script>
