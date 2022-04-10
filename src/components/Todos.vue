<template>
  <div>
    <h3 class="head">Todo App</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
      {{ todo.title }}
    </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
  
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
}
</script>

<style scoped>

  .head {
    margin-bottom: 2rem;
  }
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  
  }

  .todo {
    color: #fff;
    border: 1px solid #000;
    background-image: linear-gradient(to right, #e91e63, #f44336);
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

</style>