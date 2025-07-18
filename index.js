// Import Mirador from node_modules
import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorSharePlugin from 'mirador-share-plugin';
import miradorShareDialogPlugin from 'mirador-share-plugin';
import miradorDownloadPlugin from 'mirador-dl-plugin';
import miradorDownloadDialogPlugin  from 'mirador-dl-plugin';

Mirador.viewer({
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
}, [...miradorImageToolsPlugin,
    {
        ...miradorSharePlugin,
        target: 'WindowTopBarShareMenu',
    },
    miradorShareDialogPlugin,
    {
        ...miradorDownloadPlugin,
        target: 'WindowTopBarShareMenu',
    },
    miradorDownloadDialogPlugin,
]);
