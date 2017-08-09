<style>
</style>
<template>
  <header class="cols">
    <div>
      <Logo/>
    </div>
    <div class="text-center">
      B/E - 2017
    </div>
    <div class="text-right">
      <Hamburger/>
    </div>
  </header>
</template>
<script>
  import Logo from './Logo.vue';
  import Hamburger from './Hamburger.vue';

  export default {
    components: {
      Logo,
      Hamburger,
    },
    props: {
    },
    data() {
      return {
      };
    },
    computed: {},
    methods: {},
  };
</script>
