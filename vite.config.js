import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap:process.env.NODE_ENV=="development",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
