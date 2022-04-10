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
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos)
    },

});


export default store;