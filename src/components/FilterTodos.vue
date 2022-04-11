
<template>
  <div class="filter">
    Filter Todos
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>


<script>
import { mapActions } from "vuex"

export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos'])
}
</script>


<style scoped>

.filter {
  padding: 5px;
  letter-spacing: 5px;
  font-weight: 700;
}

select {
  padding: 5px;
  width: 50%;
  margin-top: 20px;
  padding: 6px;
  border-radius: 5px;
  outline: 0;
  border: rgb(101, 12, 164) 1px solid;
  text-align: center;
}
select:focus {
  border: rgb(101, 12, 164) 3px solid;
}
</style>