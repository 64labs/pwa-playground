import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin({devStyleRuntime: 'vanilla-extract'}),
    react({
      babel: {
        plugins: ['@vanilla-extract/babel-plugin'],
      },
    }),
  ],
})
