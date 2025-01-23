import Mirador from 'mirador/dist/es/src/index';
import {miradorImageToolsPlugin} from 'mirador-image-tools';
import {
    miradorAnnotationPlugin,
    externalStorageAnnotationPlugin,
    canvasAnnotationsPlugin,
    annotationCreationCompanionWindow,
    windowSideBarButtonsPlugin
} from 'mirador-annotations';

export {Mirador, miradorImageToolsPlugin};
export const miradorAnnotationPlugins = [
    miradorAnnotationPlugin,
    externalStorageAnnotationPlugin,
    canvasAnnotationsPlugin,
    annotationCreationCompanionWindow,
    windowSideBarButtonsPlugin,
];
