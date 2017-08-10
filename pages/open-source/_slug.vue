<style lang="scss">
</style>
<template>
  <div class="wrapper">
    <Heading/>
    <main class="main" v-if="project">
      <h1>{{ project.title }}</h1>
      <p class="small-text" v-if="project.link"><a :href="project.link" target="_blank">Link</a></p>
      <p class="small-text">{{ project.year }}</p>
      <p class="small-text">{{ project.desc }}</p>
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
        project: {},
      };
    },
    created() {
      axios.get(`/api/open-source/${this.$route.params.slug}`).then((response) => {
        this.project = response.data;
      });
    },
  };
</script>
