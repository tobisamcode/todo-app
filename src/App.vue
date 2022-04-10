<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <br>
      <Todos/>
    </div>
  </div>
  
</template>


<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>


<style>
.head {
  color: rgb(111, 107, 107);
  font-size: 27px;
  letter-spacing: 5px;
    
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
