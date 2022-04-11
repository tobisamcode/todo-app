<template>
  <div>
    <h3 class="head">Todo App</h3>
    
    <div class="todos">
      <p v-if="loading">loading....</p>
      <div v-else v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
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
      loading: false
    }
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo']),

    
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.loading = true;
    this.fetchTodos()
    .then(() => {
      this.loading = false;
    });
    this.loading= true;
    this.deleteTodo()
    .then(() => {
      this.loading = false;
    });

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
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }

</style>