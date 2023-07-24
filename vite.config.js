import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from "path";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Pages from 'vite-plugin-pages'

const {terser} = require('rollup-plugin-terser');

const isProduction = process.env.NODE_ENV === 'production';


let base_url="http://192.168.1.102:5000/";

let socket_url="ws://192.168.1.226:5000";
export default defineConfig({

    plugins: [
        vue(),
        Pages()
    ],
    build: {
        sourcemap: !isProduction,
        minify:  'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
        rollupOptions: {
            plugins: [
                terser({
                    format: {
                        comments: false,
                    },
                }),
                AutoImport({
                    resolvers: [ElementPlusResolver()],
                }),
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
            ],
        },
    },
    resolve: {
        alias: {
            '@': join(__dirname, "src")
        }
    },
    define: {
        // 添加全局变量
        base_url: JSON.stringify(base_url),
        socket_url: JSON.stringify(socket_url)
    }
})
