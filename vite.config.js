import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['styled-jsx/babel', {'plugins': ['@styled-jsx/plugin-sass']}]
        ]
      }
    }),
    svgr()
  ]
})