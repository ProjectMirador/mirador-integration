// Import Mirador from node_modules
import Mirador from 'mirador';

// Mirador annotation editor
import 'react-quill/dist/quill.snow.css'; // Needed to avoid css issue in plugin
import annotationPlugins from 'mirador-annotation-editor';
import {annotationAdapters} from 'mirador-annotation-editor';

Mirador.viewer({
    annotation: {
        adapter: (canvasId) => new annotationAdapters.LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`, 'Anonymous User'),
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
    windows: [
        {
            manifestId: "https://purl.stanford.edu/sn904cj3429/iiif/manifest",
            sideBarOpen: true,
            sideBarPanel: 'annotations'
        }
    ],
    id: 'demo',
    theme: {
        palette: {
            primary: {
                main: '#1967d2',
            },

        },
    },
}, [
    ...annotationPlugins,
]);

