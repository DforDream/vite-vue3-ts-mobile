import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

import '@/style_border.css';
import '@/style_reset.css';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
