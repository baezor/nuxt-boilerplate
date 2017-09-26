<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .row {
      display: flex;
    }
    ul {
      list-style: none;
      padding: 0;
      flex-grow: 1;
      li {
        padding-bottom: 5px;
        cursor: pointer;
        display: flex;
        margin-left: -20px;
        &.selected {
          font-weight: bold;
         }
         .delete {
           width: 20px;
           overflow: hidden;
          .delete-icon {
            background: transparent;
            border: 1px solid #f00;
            border-radius: 2em;
            color: #f00;
            display: inline-block;
            font-size: 12px;
            padding: 0 5px;
          }
         }
      }
    }
    .footer {
      position: fixed;
      bottom: 10px;
      .heart {
        display: inline-block;
        color: #a83f39;
        padding: 0 2px;
        animation: heartbeat 1.5s infinite;
      }
    }

    /* Transitions */
    .from-left-enter-active, .from-left-leave-active {
      transition: all .2s;
    }
    .from-left-enter, .from-left-leave-to {
      transform: translateX(-20px);
      opacity: 0;
    }
    .from-left-to, .from-left-leave {
      transform: translateX(0);
      opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .fade-enter-to, .fade-leave {
      opacity: 1;
    }

    /* Animation */
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.3); color: #ff0000 }
    }
  }
</style>
<template>
  <div class="wrapper">
    <div class="flex">
      <div class="sidebar">
        <img src="/logo.png" alt="Logo">
        <h3>NUXT.js + MongoDB boilerplate</h3>
      </div>
      <div>
        <custom-input></custom-input>
        <ul>
          <transition-group name="fade">
            <li v-for="item in items" :key="item._id" :class="{selected: selected === item._id}" @click="selected = item._id">
              <div class="delete">
                <transition name="from-left">
                  <span v-show="selected === item._id" class="delete-icon" @click="removeItem(item._id)">-</span>
                </transition>
              </div>
              <div class="title">
                {{ item.title }}
                <button @click="updateItem(item)" type="button">
                  UPRAVIT
                </button>
              </div>
            </li>
          </transition-group>
        </ul>
        <p>
          Made with <span class="heart">❤</span> by <a href="http://bitterend.io">Bitterend</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    };
  },
  computed: {
    items() {
      return this.$store.getters['example/getItems'];
    },
  },
  methods: {
    removeItem(id) {
      this.$store.dispatch('example/deleteItem', id);
    },
    updateItem(item) {
      const updated = JSON.parse(JSON.stringify(item));
      updated.title = 'upraveno';
      this.$store.dispatch('example/updateItem', updated);
    },
  },
  created() {
    this.$store.dispatch('example/getItemsFromApi');
  },
};
</script>
