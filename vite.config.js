import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    resolve: {
        alias: [{ find: '~', replacement: '/src' }],
    },
    build: {
        manifest: 'manifest.json',
        rollupOptions: {},
    },
})
