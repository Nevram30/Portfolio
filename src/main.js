import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import './components/Scroll.vue'
import './components/Navbar.vue'
import './components/Hero.vue'
import './components/Projects.vue'
import App from './App.vue'


const app = createApp(App)

app.use(MotionPlugin)
app.mount('#app')

