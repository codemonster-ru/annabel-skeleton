import { createApp } from 'vue';
import home from './pages/home.vue';

const props = window.__PROPS__ || {};

createApp(home, props).mount('#app');
