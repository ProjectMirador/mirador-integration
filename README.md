## Integrating Mirador

This repository is designed to show integrating Mirador 4 with modern frontend build systems.

We demonstrate the use of both our ES Module and packged UMD/CDN (served from unpkg) builds. See `index.html`, `index-umd.html`, and `annotation.html`.
```
npm run serve
```
```
npm run serve-umd
```

The pages will load at `http://localhost:1234`.

Plugins are not compatible with the UMD style of loading Mirador.
In order to integrate Mirador with any plugins, you need to use our ES Module build.
Refer to `index.js` for this setup -- here we integrate the plugins `mirador-image-tools` and `mirador-share-plugins` from NPM, as well as demonstrating how to compose custom plugins.

For creating annotations, see `annotation.js` and `annotation.html`. This is a demonstration of the Mirador 4-compatible Mirador Annotation Editor (MAE). Visit `http://localhost:1234/annotation`.

### Dependencies

In order to work directly with the Mirador code to integrate existing or custom plugins, you will need to have at least the following dependencies available in your `package.json`.
 - `mirador`
 - `react`
 - `react-dom`
 - `react-i18next`
 - `@emotion/react`
 - `@emotion/styled`
 - `@mui/material`
 - `@mui/system`

 Plugins used to demonstrate integrations in this project:
 - `mirador-image-tools`
 - `mirador-share-plugin`
 - `mirador-annotation-editor`

We also include `parcel`, which is a simple package that serves up our example HTML pages here. It would most likely not be used in a real application.

### Plugin system

This repository demonstrates a number of ways to integrate plugins with Mirador and create your own.

1. `CustomMenuComponent.jsx`: This component (a Mirador "add" plugin) models how to create an additional Menu in Mirador's top bar. With its custom arrow icon, it sits next to the default `WindowTopBarPluginMenu` in the window top bar.

2. `AnotherCustomMenuItem.jsx`: similar to `CustomMenuItem`, but targeting `CustomMenuComponent`. 

3. `CustomMenuItem.jsx`: This is a simple component targeting our `CustomMenuComponent`. The target is set in the component's export:
  ```js
  export default {
    target: 'CustomMenuComponent',
    mode: 'add',
    name: 'CustomMenuItem',
    component: CustomMenuItem,
  };
  ```
  When it is included in the intializer, the target is already set.

4.  `mirador-share-plugin`: this plugin is supported by ProjectMirador and loaded from NPM. By default internally, this plugin targets Mirador's `WindowTopBarPluginMenu` (the menu with three dots). However in this repo we are demonstrating how to use a custom target, in this case `CustomMenuComponent`. The share plugin controls are visible inside CustomMenuComponent thanks to this line: `{...miradorSharePlugin, target: 'CustomMenuComponent' }`

5. `mirador-image-tools`: this plugin is supported by ProjectMirador and loaded from NPM. By default internally, this plugin targets Mirador's `WindowTopBarPluginMenu` (the menu with three dots) as t  he location for its menu items. Including `...miradorImageToolsPlugin` in the initializer therefore adds the plugin, the image tools and the show/hide menu item.

6. `mirador-annotation-editor` : This plugin is loaded from NPM. It adds functionalities in annotation panel, add a IIIF storage adapter and an annotation companion window`. Refer to `annotation.js` and `annotation.html` for this specific integration.


For more info on Mirador plugins please [visit Mirador](https://github.com/ProjectMirador/mirador/wiki/Architecture-overview-1:-Components,-containers,-and-plugins)! This repo is meant to be a demo, not a full explanation. 



