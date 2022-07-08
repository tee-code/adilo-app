import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Oluwatobi Odekunle',
                email: 'ooluwatobialao@gmail.com',
                image: ''
            },
            token: '12lkfsjfskdlfjds3949945i4'
        }
    },
    getters: {},
    actions: {},
    modules: {},
    mutations: {}
});


export default store;