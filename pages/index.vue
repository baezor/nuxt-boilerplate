<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flex {
      width: 100%;
      height: 100%;
      .sidebar {
        flex: 0 0 200px;
      }
      .main {
        flex: 1 1;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      flex-grow: 1;
      li {
        padding-bottom: 5px;
        cursor: pointer;
        display: flex;
        margin-left: -40px;
        font-size: 1.1em;
        &.selected {
          font-weight: bold;
         }
         .icons {
           width: 40px;
           overflow: hidden;
         }
        .icon {
          display: inline-block;
          font-size: 1.1em;
          &.delete-icon {
             color: #f00;
           }
          &.save-icon {
            color: #4BB543;
          }
        }
        input {
          font-size: 1.1em;
          line-height: 1.1em;
          border: none;
          border-bottom: 1px solid;
          outline: none;
          width: 100px;
        }
      }
    }

    .footer {
      position: fixed;
      bottom: 10px;
      left: 0;
      right: 0;
      text-align: center;
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
        <img src="/logo.png" alt="Logo" width="80%">
      </div>
      <div class="main">
        <h1>NUXT.js + MongoDB boilerplate</h1>
        <custom-input></custom-input>
        <ul>
          <transition-group name="fade">
            <li v-for="item in items" :key="item._id" :class="{selected: selected === item._id}" @click="selected = item._id">
              <div class="icons">
                <transition-group name="from-left">
                  <i key="edit" v-show="selected === item._id" class="material-icons icon edit-icon" @click="edit = { id: item._id, value: item.title }">create</i>
                  <i key="delete" v-show="selected === item._id" class="material-icons icon delete-icon" @click="removeItem(item._id)">highlight_off</i>
                  <i key="show" v-show="selected === item._id" class="material-icons icon forward-icon" @click="showItem(item._id)">forward</i>
                </transition-group>
              </div>
              <div class="title">
                <span v-if="edit.id !== item._id">
                  {{ item.title }}
                </span>
                <input v-else type="text" v-model="edit.value">
                <transition name="fade">
                  <i v-if="edit.id === item._id" class="material-icons icon save-icon" @click="updateItem(item)">check_circle</i>
                </transition>
              </div>
            </li>
          </transition-group>
        </ul>
        <div v-if="item._id">
          <table>
            <tr>
              <th>ID</th>
              <td>{{ item._id }}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{{ item.title }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>
        Made with <span class="heart">❤</span> by <a href="http://bitterend.io">Bitterend</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      edit: {
        id: '',
        value: '',
      },
    };
  },
  computed: {
    items() {
      return this.$store.getters['example/getItems'];
    },
    item() {
      return this.$store.getters['example/getItem'];
    },
  },
  methods: {
    showItem(id) {
      this.$store.dispatch('example/getItem', id);
    },
    removeItem(id) {
      this.$store.dispatch('example/deleteItem', id);
    },
    updateItem(item) {
      const updated = JSON.parse(JSON.stringify(item));
      if (updated.title !== this.edit.value) {
        updated.title = this.edit.value;
        this.$store.dispatch('example/updateItem', updated);
      }
      this.edit = {
        id: '',
        value: '',
      };
    },
  },
  created() {
    this.$store.dispatch('example/getItemsFromApi');
  },
};
</script>
