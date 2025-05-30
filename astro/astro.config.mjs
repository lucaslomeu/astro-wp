// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    output: 'server',

    adapter: vercelAdapter(),

    // Configuração para rotas dinâmicas
    build: {
        format: 'directory'
    },

    // Configurações de desenvolvimento
    server: {
        host: true
    },

    // Integração com Tailwind CSS
    integrations: [
        tailwind({
            configFile: './tailwind.config.js',
            applyBaseStyles: true,
        }),
    ],
});
