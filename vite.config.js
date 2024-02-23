import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': process.env,
    },
    plugins: [react(), splitVendorChunkPlugin(), svgr()],
    resolve: {
        alias: [{ find: '~', replacement: '/src' }],
    },
    build: {
        manifest: 'manifest.json',
        rollupOptions: {},
    },
})
