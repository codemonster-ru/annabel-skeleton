import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3001,
    },
    build: {
        ssr: 'resources/js/entry-server.js',
        rollupOptions: {
            input: {
                client: 'resources/js/entry-client.js',
            },
        },
    },
});
