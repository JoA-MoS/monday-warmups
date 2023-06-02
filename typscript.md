# How to adopt TypeScript in your project

## Project Setup

1. Install TypeScript
    ```bash
    npm install typescript
    ```
2. Install ts-node
    ```bash
    npm install -D ts-node
    ```
3. Add tsconfig.json
    ```bash
    npx tsc --init
    ```
4. Update tsconfig to match best practices for node and express projects
    ```json
    {
        "compilerOptions": {
            "target": "ES2022",
            "module": "commonjs",
            "outDir": "./dist",
            "rootDir": "./src",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "noImplicitOverride": true,
            "noPropertyAccessFromIndexSignature": true,
            "noImplicitReturns": true,
            "noFallthroughCasesInSwitch": true
        },
        "include": ["./src/**/*.ts"]
    }
    ```
5. Now Lets convert the code to TypeScript and start working through some of the obvious issues.
6.

7. Update the npm scripts to use ts-node and tsc
    ```json
    {
        "scripts": {
            "start": "ts-node src/server.ts",
            "test": "ts-node src/List.test.ts",
            "build": "tsc"
        }
    }
    ```
