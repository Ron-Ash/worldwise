# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## run

run the following in the terminal

- `cd worldwise`
- `npm install`
- `npm run server`
- `npm run dev`

### add eslint plugin

- run `npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev` in terminal
- create the `.eslintrc.json` file
- reconfigure `vite.config.js` to add `"vite-plugin-eslint"`

### add react-router library

- run `npm install react-router-dom@6` in terminal

### add json-server library

- run `npm install json-server` in terminal

### add leaflet library

- run `npm install react-leaflet leaflet` in terminal
