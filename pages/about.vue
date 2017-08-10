<style lang="scss">
</style>
<template>
  <div class="wrapper">
    <Heading/>
    <main class="main">
      <h1>About</h1>
      <p class="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse hic labore magnam modi repellat temporibus. Architecto at doloremque voluptate voluptates? A consectetur culpa eaque magni molestiae repellat similique sint!</p>
    </main>
    <Social/>
    <Footing/>
  </div>
</template>

<script>
  import Heading from '../components/Heading.vue';
  import Social from '../components/Social.vue';
  import Footing from '../components/Footing.vue';

  export default {
    components: {
      Heading,
      Social,
      Footing,
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
    },
    created() {
    },
  };
</script>
