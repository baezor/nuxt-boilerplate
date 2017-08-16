<template>
  <div class="wrapper">
    <Heading/>
    <main class="main cols">
      <div>
        <h2>
          independent<br>
          digital<br>
          creatives
        </h2>
      </div>
      <div class="menu-item">
        <router-link :to="{path: '/cases'}">
          <h2>01<br>CASES</h2>
          <p class="text-small">Showcase of latest work
            made by bitter/end</p>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{path: '/open-source'}">
          <h2>02<br>OPEN-SOURCE</h2>
          <p class="text-small">Showcase of latest work
            made by bitter/end</p>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{path: '/about'}">
          <h2>03<br>ABOUT</h2>
          <p class="text-small">Showcase of latest work
            made by bitter/end</p>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link :to="{path: '/contact'}">
          <h2>04<br>CONTACT</h2>
          <p class="text-small">Showcase of latest work
            made by bitter/end</p>
        </router-link>
      </div>
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

<style lang="scss">
  .main {
    padding-top: 30vh;
    .menu-item {
      a {
        color: inherit;
      }
    }
  }
  p.text-small {
    max-width: 160px;
  }
</style>
