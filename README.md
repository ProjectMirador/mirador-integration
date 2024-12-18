## Integrating Mirador

This repository is designed to show integrating Mirador 4 with modern frontend build systems.

We demonstrate the use of both our ES Module and packged CJS/CDN (served from unpkg) builds. See `index.html` and `index-cjs.html`:
```
npm run serve
```
```
npm run serve-cjs
```

The pages will load at `http://localhost:1234`.

In order to integrate Mirador with any plugins, you need to use our ES Module build.
Refer to `index.js` for this setup -- here we integrate the `mirador-image-tools` plugin.

### Dependencies

In order to work directly with the Mirador code to integrate existing or custom plugins, you will need to have at least the following dependencies available in your `package.json`.
 - `mirador`
 - `react`
 - `react-dom`

In this project we also include `mirador-image-tools` for demonstration.

We also include `parcel`, which is a simple package that serves up our example HTML pages here. It would most likely not be used in a real application.