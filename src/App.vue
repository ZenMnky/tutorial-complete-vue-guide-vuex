<template>
  <base-container title="Vuex">
    <h3>Count: {{ counter }}</h3>
    <button @click="addValue">Add 10</button>
    <button @click="increase({ value: 5 })">Add 5</button>
    <button @click="clearCounter">Reset</button>
    <button @click="delayedIncrement">Delayed Add 1</button>
  </base-container>
  <FavoriteValue />
  <NormalizedCounter />
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import NormalizedCounter from './components/NormalizedCounter.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    FavoriteValue,
    NormalizedCounter
  },
  methods: {
    addValue() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.commit({
        type: 'increase',
        value: 10
      });
    },
    clearCounter() {
      this.$store.commit('clearCount');
    },
    delayedIncrement() {
      this.$store.dispatch('increment');
    },
    ...mapActions(['increase'])
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  text-align: center;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
button {
  margin: 0 5px 0 5px;
}
</style>
