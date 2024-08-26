import react from '@vitejs/plugin-react'
import { transformWithEsbuild } from 'vite'
import restart from 'vite-plugin-restart'
import svgr from 'vite-plugin-svgr'


export default {
    root: 'src/',
    publicDir: '../public/',
    plugins:
    [
        // Restart server on static/public file change
        restart({ restart: [ '../public/**', ] }),

        // React support
        react(),

        svgr({ 
          svgrOptions: {
            // svgr options
          },
          exportAsDefault: true
        }),

        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id) {
              if (!id.match(/src\/.*\.js$/)) {
                return null;
              }
      
              // Use the exposed transform from vite, instead of directly
              // transforming with esbuild
              return transformWithEsbuild(code, id, {
                loader: 'jsx',
                jsx: 'automatic', // 👈 this is important
              });
            },
          },
    ],
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
        loader: { '.js': 'jsx' }
    },
    // Workaround before renaming .js to .jsx
    optimizeDeps: {
        esbuildOptions: {
        loader: {
            '.js': 'jsx',
        },
        },
    },
}