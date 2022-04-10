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
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => state.todos.unshift(todo),
    },

});


export default store;