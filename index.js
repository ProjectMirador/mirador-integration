// Import Mirador from node_modules
import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { miradorSharePlugin, miradorShareDialogPlugin } from 'mirador-share-plugin';
import AnotherCustomMenuItem from './AnotherCustomMenuItem.jsx';
import CustomMenuItem from './CustomMenuItem.jsx';
import CustomMenuComponent from './CustomMenuComponent.jsx';

// Mirador annotation editor
import 'react-quill/dist/quill.snow.css'; // Needed to avoid css issue in plugin
import annotationPlugins from 'mirador-annotation-editor'
const LocalStorageAdapter = annotationPlugins.at(-1).LocalStorageAdapter;

Mirador.viewer({
    annotation: {
        adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`, 'Anonymous User'),
        allowTargetShapesStyling: true,
        commentTemplates: [{
            content: '<h4>Comment</h4><p>Comment content</p>',
            title: 'Template',
        },
            {
                content: '<h4>Comment2</h4><p>Comment content</p>',
                title: 'Template 2',
            }],
        debug: false,
        readonly: false,
        tagsSuggestions: ['Mirador', 'Awesome', 'Viewer', 'IIIF', 'Template'],
    },

    id: 'demo',
    windows: [{
        imageToolsEnabled: true,
        imageToolsOpen: true,
        manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
    }],
    theme: {
        palette: {
            primary: {
                main: '#1967d2',
            },

        },
    },
}, [
    ...miradorImageToolsPlugin,
    {...miradorSharePlugin, target: 'CustomMenuComponent' },
    miradorShareDialogPlugin,
    ...annotationPlugins,
    AnotherCustomMenuItem,
    CustomMenuItem,
    CustomMenuComponent,
]);

