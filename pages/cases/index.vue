<style lang="scss">
  .cases {
    .main {
      flex-wrap: wrap;
      padding: 10vh 10px 10px 10px;
      .case-link {
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
  <div class="wrapper cases">
    <Heading/>
    <main class="main cols">
      <div class="case-link" v-for="singleCase in cases">
        <router-link :to="{path: `/cases/${singleCase.slug}`}">
          <h2>{{ singleCase.title }}<span v-if="singleCase.category"><br>/{{ singleCase.category }}</span></h2>
          <p class="text-small" v-html="singleCase.desc"></p>
          <p class="text-small" v-html="singleCase.year"></p>
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
      cases() {
        return this.$store.getters['cases/getAllCases'];
      },
    },
    created() {
      this.$store.cacheDispatch('cases/getAllCases');
    },
  };
</script>
