<style lang="scss">
@import '../assets/variables';

.hamburger {
  display: block;
  width: $padding;
  text-align: right;
  margin: 0 auto;
  span {
    float: right;
    clear: both;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $foreground;
    margin-bottom: 2px;

    &:nth-child(2) {
      width: 50%;
    }
    &:nth-child(3) {
      display: none;
    }
  }
}
</style>
<template>
  <router-link to="'/'" class="hamburger pull-right">
    <span></span>
    <span></span>
    <span></span>
  </router-link>
</template>
<script>
  export default {
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
