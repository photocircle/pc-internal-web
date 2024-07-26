import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        outputFile: "coverage/test_result/junit.xml",
        reporters: ["default", "junit"],
        exclude: ["**/node_modules/**", "./build"],
        coverage: {
            provider: "istanbul",
            reporter: ["text", "cobertura", "html"],
            include: [
                "src/**",
                "!src/**/*.tsx",
                "!src/tests/*",
                "!src/types/*",
                "!src/assets/**/*",
                "!src/generated/**/*",
                "!src/store/**/*",
            ],
        },
    },
})
