import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from "@million/lint";

// https://vite.dev/config/
export default defineConfig({
    plugins: [MillionLint.vite({auto:true}), react()],
    base: "https://xipeRafa.github.io/ac"
})


