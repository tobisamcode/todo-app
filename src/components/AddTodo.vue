<template>
  <div>
    <h3 class="head">Add Todo</h3>
    <div class="add">
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>



<script>
import { mapActions } from "vuex"

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit() {
      this.addTodo(this.title);
      this.title = '';
    }
  },


}
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type="text"]  {
  width: 75%;
  padding: 12px 2rem;
  border: 1px rgb(199, 199, 219) solid;
  outline: 0;
  border-radius: 5px;
  margin-right: 5px;
}
input[type="text"]:focus {
  border: rgb(101, 12, 164) 3px solid;
}

input[type="submit"] {
  width: 20%;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  background: rgb(106, 106, 234);
  padding: 10px;
  border: 1px rgb(199, 199, 219) solid;
  border-radius: 5px;
  cursor: pointer;
}
</style>