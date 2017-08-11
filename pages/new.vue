<style lang="scss">
  .new-case {
    .new-case-form {
      tr {
        td {
          input, textarea, button {
            width: 100%;
            border: 1px solid #000;
            background: none;
          }
        }
      }
    }
  .right {
    position: relative;
    &.dragging {
       border: 1px solid;
        .previews {
          z-index: -1;
        }
     }
  .dropzone {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .previews {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    .single-preview {
      width: 25%;
      padding: 5px;
    }
  }
  }
  }
</style>
<template>
  <div class="wrapper new-case">
    <Heading/>
    <main class="main">
      <h1>New project</h1>
      <div class="cols">
        <div class="left">
          <div class="form-group new-case-form">
            <table>
              <tbody>
                <tr>
                  <td><label for="">Type</label></td>
                  <td>
                    <select name="" id="" v-model="newCase.type">
                      <option value="case">Case</option>
                      <option value="openSource">Open-source</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label for="">Title*:</label></td>
                  <td><input type="text" v-model="newCase.title" @input="createSlug"></td>
                </tr>
                <tr>
                  <td><label for="">Category:</label></td>
                  <td><input type="text" v-model="newCase.category"></td>
                </tr>
                <tr>
                  <td><label for="">Year*:</label></td>
                  <td><input type="number" v-model="newCase.year"></td>
                </tr>
                <tr>
                  <td><label for="">Link:</label></td>
                  <td><input type="text" v-model="newCase.link"></td>
                </tr>
                <tr>
                  <td><label for="">Desc* :</label></td>
                  <td><textarea name="" id="" cols="30" rows="10" v-model="newCase.desc"></textarea></td>
                </tr>
                <tr v-if="error.show === true">
                  <td colspan="2" class="text-center">{{ error.msg }}</td>
                </tr>
                <tr>
                  <td colspan="2"><button @click="saveCase">Save</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="right" :class="{'dragging': dragging}" @change="drop" @dragenter="dragging=true" @dragleave="dragging=false">
          <input class="dropzone" type="file" multiple="multiple">
          <div class="previews">
            <img class="single-preview" v-for="preview in previews" :src="preview.src" @click="removeImage(preview.key)" alt="">
          </div>
        </div>
      </div>
    </main>
    <Social/>
    <Footing/>
  </div>
</template>
<script>
  import axios from 'axios';
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
        newCase: {
          type: 'case',
          title: 'aa',
          slug: '',
          category: '',
          desc: 'aa',
          year: '20',
          link: '',
          files: [],
        },
        error: {
          show: false,
          msg: '',
        },
        previews: [],
        dragging: false,
      };
    },
    methods: {
      toSlug(text) {
        let st = text;
        if (st) {
          st = text.toLowerCase();
          st = st.replace(/[\u00C0-\u00C5]/ig, 'a');
          st = st.replace(/[\u00C8-\u00CB]/ig, 'e');
          st = st.replace(/[\u00CC-\u00CF]/ig, 'i');
          st = st.replace(/[\u00D2-\u00D6]/ig, 'o');
          st = st.replace(/[\u00D9-\u00DC]/ig, 'u');
          st = st.replace(/[\u00D1]/ig, 'n');
          st = st.replace(/[^a-z0-9 ]+/gi, '');
          st = st.trim().replace(/ /g, '-');
          st = st.replace(/[-]{2}/g, '');
          st = st.replace(/[^a-z\- ]*/gi, '');
        }
        return st;
      },
      createSlug(e) {
        this.newCase.slug = this.toSlug(e.target.value);
      },
      saveCase() {
        this.error.show = false;
        const newCase = this.newCase;
        const formData = new FormData();
        if (newCase.files.length !== 0) {
          newCase.files.forEach((file) => {
            formData.append('uploads[]', file);
          });
        }
        delete newCase.files;
        Object.keys(newCase).forEach(key => formData.append(key, newCase[key]));
        if (newCase.title && newCase.slug && newCase.desc && newCase.year) {
          let call = '';
          if (newCase.type === 'case') {
            delete newCase.type;
            call = axios.post('/api/case', formData); // newCase
          } else {
            delete newCase.type;
            call = axios.post('/api/open-source', newCase);
          }
          call.then((response) => {
            if (response.data.slug === newCase.slug) {
              this.newCase = {
                type: 'case',
                title: '',
                slug: '',
                category: '',
                desc: '',
                year: '',
                link: '',
                files: [],
              };
            }
          });
        } else {
          this.error = {
            show: true,
            msg: 'Please fill required fields',
          };
        }
      },
      createPreview(image, key) {
        const reader = new FileReader();
        this.previews = [];
        const vm = this;
        reader.onload = (e) => {
          vm.previews.push({ src: e.target.result, key });
        };
        reader.readAsDataURL(image);
      },
      removeImage(key) {
        this.newCase.files.splice(key, 1);
      },
      drop(e) {
        this.dragging = false;
        const files = e.target.files;
        Array.from(files).forEach(file => this.newCase.files.push(file));
      },
    },
    watch: {
      'newCase.files': function (images) {
        if (images.length === 0) {
          this.previews = [];
          return;
        }
        images.forEach((image, key) => {
          this.createPreview(image, key);
        });
      },
    },
  };
</script>
