<style lang="scss">
  .open-source {
    .main {
      flex-wrap: wrap;
      padding: 10vh 10px 10px 10px;
      .open-source-link {
        flex: 0 0 25%;
        padding: 15px;
        backroung: #fff;
        &:hover {
           box-shadow: 0px 0px 20px 5px #bbbbbb;
         }
      }
    }
  }
</style>
<template>
  <div class="wrapper open-source">
    <Heading/>
    <main class="main cols">
      <div class="open-source-link" v-for="project in projects">
        <router-link :to="{path: `/open-source/${project.slug}`}">
          <h2>{{ project.title }}<span v-if="project.category"><br>/{{ project.category }}</span></h2>
          <p class="text-small" v-html="project.desc"></p>
          <p class="text-small" v-html="project.year"></p>
        </router-link>
      </div>
    </main>
    <Social/>
    <Footing/>
  </div>
</template>
<script>
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
      };
    },
    computed: {
      projects() {
        return this.$store.getters['open-source/getAllOpenSourceProjects'];
      },
    },
    created() {
      this.$store.dispatch('open-source/getAllOpenSourceProjects');
    },
  };
</script>
