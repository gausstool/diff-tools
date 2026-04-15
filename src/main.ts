import { createApp } from 'vue';
import '@/styles/index.css';
import '@/styles/app.css';
import '@/styles/pages/editor.css';
import App from './App.vue';
import router from './router';

const container = document.getElementById('app') as HTMLDivElement;
const app = createApp(App);
app.use(router);
app.mount(container);
