import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from "path";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import terser from '@rollup/plugin-terser';
import Pages from 'vite-plugin-pages'


const isProduction = process.env.NODE_ENV === 'production';


let base_url=isProduction?"https://localhost:7248/":"http://192.168.1.102:5000/";

let socket_url=isProduction?"wss://localhost:7248/":"ws://192.168.1.226:5000";
export default defineConfig({

    plugins: [
        vue(),
        Pages(),
        terser()
    ],
    build: {
        sourcemap: !isProduction,
        rollupOptions: {
            plugins: [
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
