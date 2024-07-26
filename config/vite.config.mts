import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import commonjs from "vite-plugin-commonjs"
import svgrPlugin from "vite-plugin-svgr"
import basicSsl from "@vitejs/plugin-basic-ssl"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig({
    server: {
        host: "internal.localhost.photocircleapp.com",
        https: true,
    },
    build: {
        modulePreload: false,
        sourcemap: true,
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin({
            include: "**/*.svg",
        }),
        commonjs(),
        basicSsl(),
        createHtmlPlugin({
            pages: [
                { filename: "index.html", template: "public/index.html" },
                { filename: "index.join.html", template: "public/index.join.html" },
            ],
        }),
    ],
})
