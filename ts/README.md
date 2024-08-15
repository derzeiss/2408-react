# How to setup your local typescript environment (to run via node.js)

1. Install dependencies and create required files

   ```bash
   # in the (empty) directory you want to create your project in

   npm init -y
   npm i typescript
   npx tsc --init
   mkdir src
   echo "console.log('Hello World')" > src/index.ts
   ```

1. Modify your `package.json`:

   ```json
   {
     ...
     "main": "dist/index.js",
     "type": "module",
     "scripts": {
       "dev": "tsc --watch",
       "build": "tsc",
       "start": "node dist/index.js"
     },
     ...
   }
   ```

1. Modify your `tsconfig.json`:

   ```json
   // keep the defaults, just uncomment the following lines. They will be spread across the file.

   {
    "compilerOptions": {
      ...
      "rootDir": "./src",
      "outDir": "./dist",
    }
   }

   ```

1. Test your setup

   ```bash
   npm run build
   npm start
   ```

   The console should print `Hello World`. If so, you're ready to go!
