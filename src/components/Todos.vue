<template>
  <div>
    <h3 class="head">Todo App</h3>
    <div class="legend">
      <span class="para">Double click to mark as complete</span>
      <span class="para">
        <span class="incomplete-box"></span> Incomplete
      </span>
      <span class="para">
        <span class="complete-box"></span>  Complete
      </span>
    </div>
    <div class="todos">
      <p v-if="loading">loading....</p>
      <div v-else 
        @dblclick="onDbClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id" 
        class="todo"
        :class="{'is-complete':todo.completed}"
        >{{ todo.title }}
      
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
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDbClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updTodo);
    }
    
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.loading = true;
    this.fetchTodos()
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
  .legend {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #e91e63;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }


  @media(max-width:500px) {
    .todos {
      grid-template-columns: 1fr;
    }  
    .para {
    font-size: 10px;
  }
}


</style>