import { createStore } from 'vuex';
import axios from 'axios';



const store = createStore({
    state: {
        todos: []
    },
    getters: {
        allTodos: (state) => state.todos
    },
    actions: {
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

            commit('setTodos', response.data)
        },
        async addTodo({ commit }, title) {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

            commit('newTodo', response.data);
        },
        async deleteTodo({ commit }, id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

            commit('removeTodo', id);
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => state.todos.unshift(todo),
        removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
    },

});


export default store;