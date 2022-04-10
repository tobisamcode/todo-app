<template>
  <div id="app">
    <div class="container">
      <Todos/>
    </div>
  </div>
  
</template>


<script>
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>


<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
