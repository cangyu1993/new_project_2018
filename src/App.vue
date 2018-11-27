<template>
  <div id="app">
    <container/>
  </div>
</template>

<script>
  import container from '@/container'
  export default {
    components: {
      container
    },
    name: 'App'
  }
</script>

<style>
  /*重置页面样式*/
  * {
    margin: 0;
    padding: 0;
  }
</style>
