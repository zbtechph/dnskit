import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap';
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')