//打包路径和服务代理
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',   //设置打包路径
  build: {
    chunkSizeWarningLimit: 1500
  },

  server: {
    // host: true,
    // port: 4000,    //设置服务启动端口
    // open: true,    //设置服务启动时是否自动打开浏览器
    // cors: true,    //允许跨域
    //设置代理
    // proxy:{
    // 	'/api':{
    // 		target:'http://47.107.225.197:8081/',
    // 		changeOrigin:true,//开启代理，允许跨域
    // 		secure:false,// 如果是https接口，需要配置这个参数
    // 		rewrite: (path) => path.replace(/^\/api/, ""),//设置重写路径
    // 	}
    // }
  },
})

