import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/routes/router'

import './assets/main.css'


//createApp(App).mount('#app')

createApp(App)
    .use(router)
    .mount('#app')

//window.app = createApp(App).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './routes/router'


// const app = createApp(App);
// app.use(router);

// app.mount('#app');