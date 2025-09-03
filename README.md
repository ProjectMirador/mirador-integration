## Integrating Mirador

This repository is designed to show integrating Mirador 4 with modern frontend build systems.

We demonstrate the use of both our ES Module and packged UMD/CDN (served from unpkg) builds. See `index.html` and `index-umd.html`:
```
npm run serve
```
```
npm run serve-umd
```

The pages will load at `http://localhost:1234`.

Plugins are not compatible with the UMD style of loading Mirador.
In order to integrate Mirador with any plugins, you need to use our ES Module build.
Refer to `index.js` for this setup -- here we integrate the `mirador-image-tools` plugin.

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

We also include `parcel`, which is a simple package that serves up our example HTML pages here. It would most likely not be used in a real application.

### Plugin system

This repository demonstrates a number of ways to integrate plugins with Mirador.

1. `mirador-image-tools`: this plugin is supported by ProjectMirador and loaded from npm. By default internally, this plugin targets Mirador's `WindowTopBarPluginMenu` (the menu with three dots) as the location for its menu items. Including `...miradorImageToolsPlugin` in the initializer therefore adds the plugin, the image tools and the show/hide menu item.

2. `CustomMenuComponent.jsx`: This component (a Mirador "add" plugin) models how to create an additional Menu in Mirador's top bar. With its custom arrow icon, it sits next to the default `WindowTopBarPluginMenu` in the window top bar.


3. `AnotherCustomMenuItem.jsx`: similar to `CustomMenuItem`, but targeting `CustomMenuComponent`. 

4.  `mirador-share-plugin`: this plugin is supported by ProjectMirador and loaded from npm. By default internally, this plugin targets Mirador's `WindowTopBarPluginMenu` (the menu with three dots). However in this repo we are demonstrating how to use a custom target, in this case `CustomMenuComponent`. The share plugin controls are visible inside CustomMenuComponent thanks to this line: `{...miradorSharePlugin, target: 'CustomMenuComponent' }`


5. `CustomMenuItem.jsx`: This is just a simple component targeting our `CustomMenuComponent`. The target is set in the component's export:
```js
export default {
  target: 'CustomMenuComponent',
  mode: 'add',
  name: 'CustomMenuItem',
  component: CustomMenuItem,
};
```
When it is included in the intializer, the target is already set.

5. `AnotherCustomMenuItem.js`: Similar to `CustomMenuItem`, but targeting the default `WindowTopBarPluginMenu`. 


For more info on Mirador plugins please [visit Mirador](https://github.com/ProjectMirador/mirador/wiki/Architecture-overview-1:-Components,-containers,-and-plugins)! This repo is meant to be a demo, not a full explanation. 



