import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

export default defineConfig(({mode})=>{
  if (mode === 'lib') {
    return{
      plugins: [vue()],
      build: {
        emptyOutDir: true,
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(projectRootDir, 'src/lib.ts'),
          name: 'lib',
          // the proper extensions will be added
          fileName: 'lib',
          formats: ['es']
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    }
  }
  if (mode === 'site') {
    return{
      plugins: [vue()],
      base:'/icons/',
      build:{
        outDir:resolve(projectRootDir, 'site'),
      }
    }
  }
})
