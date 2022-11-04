import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  publicDir: 'public',//静态资源服务的文件夹，默认public,public下的文件会被完整复制到目标目录的根目录下，保持原有文件名，不会被hash
  server:{
    host:'0.0.0.0'
  },
  build: {
    target: 'es2015', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'dlsesp-app-ios/XpdzBase/Resource/vue', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    sourcemap: false, // 构建后是否生成 sourcemap 文件
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions:{
      compress:{
        drop_console:true,//生产环境移除console.log
        drop_debugger:true//生产环境移除debugger
      }
    }
  },
  plugins: [
    vue(),
    legacy({
      targets: [
        'defaults', 'not IE 11'
      ],
    }),
    Components({
    resolvers: [VantResolver()],
  }),],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  }
})
