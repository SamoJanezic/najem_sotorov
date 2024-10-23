// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import router from './router'


const app = createApp(App)

library.add(fas, faFacebook, faTwitter, faInstagram, faLinkedin, faGithub);
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
