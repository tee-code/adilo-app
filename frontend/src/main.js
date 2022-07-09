import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import store from './store'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')