import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {

    return {
        root: './frontend',
        base: '/',
        build: {
            outDir: '../dist',
            emptyOutDir: true,
        },
        server: {
            port: 3000,
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    secure: false,
                },

            }
        }
    };
});
