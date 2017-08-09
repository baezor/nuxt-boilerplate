import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from './MyButton'
import Welcome from './Welcome'
import Logo from './../components/Logo.vue'
import Markdown from './../components/markdown.vue'

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))

storiesOf('Branding', module)
    .add('Logo', () => ({
      components: { Logo },
      template: '<logo/>'
    }))

storiesOf('Weeker', module)
    .add('Markdown', () => ({
      components: { Markdown },
      template: '<markdown :text="\'Testing content\'" :year="2017" :week="0"></markdown>',
    }))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: linkTo('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: linkTo('clicked') }
  }))
