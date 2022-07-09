import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import LivePreview from '../views/LivePreview.vue'
import Recordings from '../views/Recordings.vue'
import Requested from '../views/Requested.vue'
import store from "../store"


const routes = [{
    path: "/",
    redirect: "/dashboard",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [{
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "/recordings",
            name: "Recordings",
            component: Recordings
        },
        {
            path: "/recordings/preview",
            name: "LivePreview",
            component: LivePreview
        },
        {
            path: "/requested",
            name: "Requested",
            component: Requested
        },
    ]
}, ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;