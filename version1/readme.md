# React + Typescript + ViteJS Boilerplate with Domain Driven Design (DDD)
Create By Pagongamedev

# Stack

| Stack     | Name                | Version | Link                                                 | Note                  |
| --------- | ------------------- | :-----: | ---------------------------------------------------- | --------------------- |
| Framework | react               | 18.2.0  | https://reactjs.org/                                 | Installed by ViteJS   |
| Framework | react-dom           | 18.2.0  | https://reactjs.org/                                 | Installed by ViteJS   |
| Library   | react-router-dom    | 6.12.1  | https://reactrouter.com/en/main                      | Route Management      |
| Library   | react-hook-form     | 7.44.3  | https://react-hook-form.com                          | Helper Form           |
| Library   | @hookform/resolvers |  3.1.0  | https://github.com/react-hook-form/resolvers         | Schema Resolve        |
| Library   | yup                 |  1.2.0  | https://github.com/jquense/yup                       | Schema for form       |
| Library   | react-i18next       | 12.3.1  | https://react.i18next.com/                           | i18n for react        |
| Library   | i18next             | 22.5.1  | https://www.i18next.com/                             | i18n                  |
| Library   | axios               |  1.4.0  | https://axios-http.com/                              | HTTP Client API       |
| Library   | firebase            | 9.22.2  | https://firebase.google.com/docs/auth                | Firebase Auth         |
| Library   | react-icons         |  4.9.0  | https://react-icons.github.io/react-icons/           | React Icon Font       |
| Library   | react-spinners-kit  |  1.9.1  | https://dmitrymorozoff.github.io/react-spinners-kit/ | React Spinner SVG     |
| Library   | chart.js            |  4.3.0  | https://www.chartjs.org/docs/latest/                 | Chart                 |
| Library   | react-chartjs-2     |  5.2.0  | https://react-chartjs-2.js.org/                      | Chart React Adapter   |
| Library   | zustand             |  4.3.8  | https://github.com/pmndrs/zustand                    | State Management      |
| Library   | immer               | 10.0.2  | https://immerjs.github.io/immer/                     | Nested State Helper   |
| Library   | universal-helper    | 0.0.28  | https://github.com/pagongamedev/universal-helper     | Helper for clean code |
| Library   | dayjs               | 1.11.8  | https://day.js.org/                                  | Date Helper           |

| Stack Dev          | Name                             | Version | Link                                                   | Note                    |
| ------------------ | -------------------------------- | :-----: | ------------------------------------------------------ | ----------------------- |
| JavaScript Runtime | node                             | 19.0.0  | https://nodejs.org/en/download/current/                |                         |
| Module Bundler     | viteJS                           |  4.3.9  | https://v4.vitejs.dev/guide/                           |                         |
| Framework          | million                          |  2.4.4  | https://million.dev/docs/install                       | React Optimize Compiler |
| Framework          | typescript                       |  5.1.3  | https://www.typescriptlang.org/                        | Installed by ViteJS     |
| Plugin             | vite-plugin-windicss             |  1.9.0  | https://windicss.org/integrations/vite.html            | CSS                     |
| Plugin             | rollup-plugin-visualizer         |  5.9.2  | https://www.npmjs.com/package/rollup-plugin-visualizer | Visualizer              |
| Library            | prettier                         |  2.8.8  | https://prettier.io/docs/en/configuration.html         | Format Document Rule    |
| Library            | eslint                           | 8.42.0  | https://eslint.org/docs/latest/user-guide/configuring/ | Format Document Rule    |
| Plugin             | @typescript-eslint/eslint-plugin | 5.59.9  |                                                        | Eslint Plugin           |
| Plugin             | @typescript-eslint/parser        | 5.59.9  |                                                        | Eslint Plugin           |
| Plugin             | eslint-config-prettier           |  4.2.1  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-import             | 2.27.5  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-jsx-a11y           |  6.7.1  |                                                        | Eslint Plugin (Disable) |
| Plugin             | eslint-plugin-prettier           |  4.2.1  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-react              | 7.32.2  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-simple-import-sort | 10.0.0  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-check-file         |  2.3.0  |                                                        | Eslint Plugin           |
| Plugin             | eslint-plugin-unicorn            | 47.0.0  |                                                        | Eslint Plugin           |
| Plugin             | prettier-plugin-tailwindcss      |  0.3.0  |                                                        | Prettier Plugin         |
| Library            | vite-plugin-pwa                  | 0.16.4  |                                                        | Eslint Plugin           |

 <!--               | Plugin                           | vite-plugin-top-level-await | 1.2.2                                                  | https://github.com/Menci/vite-plugin-top-level-await | await without esnext | --> 

| Interactive Stack | Name  | Version | Link                 | Note            |
| ----------------- | ----- | :-----: | -------------------- | --------------- |
| Framework         | three | 0.153.0 | https://threejs.org/ | WebGL Framework |

| Interactive Stack Dev | Name         | Version | Link | Note |
| --------------------- | ------------ | :-----: | ---- | ---- |
| Types                 | @types/three | 0.152.1 |      | Type |

<br />

# VS Code Extension

| Name                             | Link                                                                           | Note                        |
| -------------------------------- | ------------------------------------------------------------------------------ | --------------------------- |
| Markdown All in One              | https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one | For Markdown                |
| Markdown Preview Mermaid Support | https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid   | For Mermaid Diagram Support |
| Error Lens                       | https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens       | Easy for see error          |
| ESLint                           | https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint     | Format Document Rule        |
| Prettier - Code formatter        | https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode     | Format Document Rule        |
| MS : Live Preview                | https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server      | Browser in VSCode           |

<br />

# How to Install (From Zero)
## 1. Install Node : https://nodejs.org/en/download/current/

## 2. Install ViteJS With react-ts : https://vitejs.dev/guide/

```node
    npm create vite@latest [app-name] -- --template react-ts
```

<br />

## 3. Install Plugin

### 1. CSS Plugin : vite-plugin-windicss : https://windicss.org/integrations/vite.html

1.  install npm

    ```node
    npm i -D vite-plugin-windicss windicss
    ```

2.  add plugin in vite.config.js

    ```javascript
    import WindiCSS from 'vite-plugin-windicss';

    export default {
      plugins: [WindiCSS()],
    };
    ```

3.  import virtual:windi.css in main.tsx

    ```javascript
    import 'virtual:windi.css';
    ```

4.  create windi.config.js with empty
    > สร้างไว้ก่อนแต่ยังไมไ่ด้ใช้

<br />

### 2. Visualizer Plugin : https://www.npmjs.com/package/rollup-plugin-visualizer

1.  install npm

```
npm install --D rollup-plugin-visualizer @types/node
```

2.  add plugin in vite.config.js

```javascript
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';
...
export default defineConfig({
... ,
build: {
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-treemap.html'),
          template: 'treemap',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-sunburst.html'),
          template: 'sunburst',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-network.html'),
          template: 'network',
        }),
      ],
    },
},
});
```

<br />

## 4. Add Eslint + Prettier
### 1. Copy Config Files
```
  .env.example
  .eslintignore
  .eslintrc.cjs
  .gitignore
  .prettierignore
  .prettierrc.cjs
  .vscode/settings.json
```

### 2. Install Eslint Plugins
```node
  npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-simple-import-sort prettier
```

### 3. add scripts
```json
  "scripts": {
    ...
    "lint:fix": "eslint ./src --ext .jsx,.js,.ts,.tsx --quiet --fix --ignore-path ./.gitignore",
    "lint:format": "prettier  --loglevel warn --write \"./**/*.{js,jsx,ts,tsx,css,md,json}\" ",
    "lint": "npm lint:format && npm lint:fix "
  },
```
## 5. Add Config

### 1. add npm script in package.json

```json
{
  ...
  "scripts": {
    ...
    "start": "vite --host",
    "tsc": "tsc --watch",
    "build": "tsc && vite build",
    "preview": "vite preview",
  },
}
```

### 2. add resovle deduplicate in vite.config.ts

```javascript
export default defineConfig({
...
  resolve: {
    dedupe: ['react'],
  },
});
```

### 3. install i18n (Internationalization)

```node
npm install --save i18next react-i18next
```

### 4. [Optional] More Setting
add https in vite.config.ts

```javascript
export default defineConfig({
...
  server: {
    host: true,
    https: {
      key: fs.readFileSync([server.key]),
      cert: fs.readFileSync([server.crt]),
    },
  },
});
```

if use firebase hosting add this for fix [refresh not found page]
```json
{
  "hosting": {
    ...
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
  }
}
```

### 5. install Other library

1. install
   ```node
   npm install --save react-icons axios firebase
   ```

# How to Use

## 1.Run Hot Reload (Dev)

1. auto check typescript format
   ```node
   npm run tsc
   ```
2. run dev
   ```node
   npm run start
   ```

## 2.Run Build

1. build to dist folder
   ```node
   npm run build
   ```
2. preview dist folder
   ```node
   npm run preview
   ```
3. analytics build file in analytics folder
   ```
   analytics/
   └── stats-treemap.html
   └── stats-sunburst.html
   └── stats-network.html
   ```
