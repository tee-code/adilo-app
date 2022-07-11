import { createStore } from 'vuex';


const defaultUserData = {
    name: 'Oluwatobi Odekunle',
    email: 'ooluwatobialao@gmail.com',
    image: '../../public/profile.jpg'
}

const defaultRecordings = [{
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
];

const defaultProjects = [{
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
];

const defaultOptions = {
    isReady: false,
    recordScreen: false,
    recordCamera: false,
    recordAudio: false,
    project_id: 0
};

const setData = (data, label) => {
    localStorage.setItem(label, JSON.stringify(data));
}

const getData = (label) => {
    return JSON.parse(localStorage.getItem(label));
}

const store = createStore({
    state: {
        user: {
            data: getData('USER') || defaultUserData,
        },
        projects: getData('PROJECTS') || defaultProjects,
        recordings: getData('RECORDINGS') || defaultRecordings,
        options: getData('OPTIONS') || defaultOptions
    },
    getters: {},
    actions: {
        updateOptions: ({ commit }, data) => {

            commit('updateOptions', data);

            return {
                success: true,
                data: data
            }

        },
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
            state.recordings = recordings;
            setData(recordings, 'RECORDINGS');
        },
        updateOptions: (state, options) => {
            state.options.project_id = options.project_id
            state.options.isReady = options.isReady
            state.options.recordAudio = options.recordAudio
            state.options.recordCamera = options.recordCamera
            state.options.recordScreen = options.recordScreen

            setData(state.options, 'OPTIONS')
        }
    }
});


export default store;