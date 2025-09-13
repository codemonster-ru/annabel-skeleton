import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

const pages = {
    Home: () => import('./pages/home.vue'),
};

export async function render(component, props = {}) {
    if (!pages[component]) {
        throw new Error(`Компонент ${component} не найден`);
    }

    const mod = await pages[component]();
    const app = createSSRApp(mod.default, props);

    return await renderToString(app);
}
