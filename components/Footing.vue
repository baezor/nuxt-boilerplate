<style lang="scss">
  @import '../assets/variables';

  .angle {
    display: block;
    position: fixed;
    bottom: $padding-lg;
    right: $padding-lg;
    &:before, &:after {
      content: "";
      display: block;
      background-color: $foreground;
      width: $padding;
      height: 2px;
    }
    &:after {
      transform: rotate(90deg);
      transform-origin: 100% 0%;
    }
  }
</style>
<template>
  <footer class="cols">
    <div>
      <span class="line line--vertical"></span>
      <router-link :to="'/login'">
        Login
      </router-link>
    </div>
    <div>
    </div>
    <div class="text-right">
      <span class="angle"></span>
    </div>
  </footer>
</template>
<script>
  export default {
    components: {
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
