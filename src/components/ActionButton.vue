<template>
  <button>
    <router-link :to="url">
      <slot />
    </router-link>
  </button>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '/#'
    }
  },
}
</script>

<style lang="scss">
  button {
    padding: .5em 2em;
    border-radius: 1em;
    background-color: $orange;
    border: 0;
    font-size: 1em;
    a {
      color: white;
      text-decoration: none;
    }
  }
  button:hover {
    cursor: pointer;
  }
</style>