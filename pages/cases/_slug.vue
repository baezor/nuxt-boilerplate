<style lang="scss">
</style>
<template>
  <div class="wrapper">
    <Heading/>
    <main class="main" v-if="actualCase">
      <h1>{{ actualCase.title }}</h1>
      <p class="small-text" v-if="actualCase.link"><a :href="actualCase.link" target="_blank">Link</a></p>
      <p class="small-text">{{ actualCase.year }}</p>
      <p class="small-text">{{ actualCase.desc }}</p>
      <div class="images" v-if="actualCase.images">
        <img v-for="image in actualCase.images" :src="image" alt="">
      </div>
    </main>
    <Social/>
    <Footing/>
  </div>
</template>
<script>
  import axios from 'axios';
  import Heading from '../../components/Heading.vue';
  import Social from '../../components/Social.vue';
  import Footing from '../../components/Footing.vue';

  export default {
    components: {
      Heading,
      Social,
      Footing,
    },
    data() {
      return {
        actualCase: {},
      };
    },
    created() {
      axios.get(`/api/cases/${this.$route.params.slug}`).then((response) => {
        this.actualCase = response.data;
      });
    },
  };
</script>
