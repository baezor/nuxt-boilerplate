<style lang="scss">
  .custom-input__wrapper {
    display: flex;
    input {
      padding: 5px;
      border: 1px solid;
      border-right: 0;
      &:focus {
         outline: none;
       }
    }
    button {
      background: none;
      border: 1px solid;
      font-weight: bold;
    }
  }
</style>
<template>
  <div class="custom-input__wrapper">
    <input type="text" v-model="item.title" placeholder="Type name of item" autofocus>
    <button @click="saveNewItem()">Save</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        item: {
          title: '',
        },
      };
    },
    methods: {
      saveNewItem() {
        this.$store.dispatch('example/addItem', this.item).then(() => {
          this.item.title = '';
        });
      },
    },
  };
</script>
