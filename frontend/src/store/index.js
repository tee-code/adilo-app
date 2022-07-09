import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Oluwatobi Odekunle',
                email: 'ooluwatobialao@gmail.com',
                image: '../../public/profile.jpg'
            },
            token: '12lkfsjfskdlfjds3949945i4'
        },
        projects: [{
                id: 1,
                name: 'English Course'
            },
            {
                id: 2,
                name: 'Tech Meetings'
            }, {
                id: 3,
                name: 'Design Meetings'
            }, {
                id: 4,
                name: 'Debugging'
            }
        ],
        recordings: [{
                project_id: 1,
                image: "../../public/artist1.jpg",
                title: "Getting it right the first time",
                description: "The Video description is shown here if the user has added it.",
                views: 324,
                size: "923 KB",
                modified: "04/18/2022"
            },
            {
                project_id: 2,
                image: "../../public/artist2.jpg",
                title: "Getting it right the first time",
                description: "The Video description is shown here if the user has added it.",
                views: 324,
                size: "923 KB",
                modified: "04/18/2022"
            },
            {
                project_id: 3,
                image: "../../public/artist3.jpg",
                title: "Getting it right the first time",
                description: "The Video description is shown here if the user has added it.",
                views: 324,
                size: "923 KB",
                modified: "04/18/2022"
            },
            {
                project_id: 4,
                image: "../../public/artist4.jpg",
                title: "Getting it right the first time",
                description: "The Video description is shown here if the user has added it.",
                views: 324,
                size: "923 KB",
                modified: "05/18/2022"
            },
            {
                project_id: 1,
                image: "../../public/artist5.jpg",
                title: "Getting it right the first time",
                description: "The Video description is shown here if the user has added it.",
                views: 324,
                size: "923 KB",
                modified: "06/18/2022"
            }
        ]
    },
    getters: {},
    actions: {
        sortByDate: ({ commit }) => {

            const data = store.state.recordings.sort((a, b) => {
                return new Date(b.modified) - new Date(a.modified);
            });

            commit('updateRecordings', data);

            return data;
        }
    },
    modules: {},
    mutations: {
        updateRecordings: (state, recordings) => {
            state.recordings = recordings
        }
    }
});


export default store;