import { createApp } from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import { gsap } from 'gsap'
import aos from 'aos'

const app = createApp(App)
app.use(gsap)
app.use(aos)
app.use(VueParticles)
app.mount('#app')