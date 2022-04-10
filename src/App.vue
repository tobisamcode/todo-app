<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <br>
      <Todos/>
    </div>
  </div>
  
</template>


<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  }
}
</script>


<style>
.head {
    font-size: 30px;
    
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
