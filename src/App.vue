<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    'navigation-bar': Navigation    
  }
}
</script>