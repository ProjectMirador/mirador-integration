// Import Mirador from node_modules
import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import {  miradorSharePlugin, miradorShareDialogPlugin } from 'mirador-share-plugin';
import { miradorDownloadPlugin, miradorDownloadDialogPlugin } from 'mirador-dl-plugin'; 


console.log({
  miradorImageToolsPlugin,
  miradorSharePlugin,
  miradorShareDialogPlugin,
  miradorDownloadPlugin,
  miradorDownloadDialogPlugin,
});

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
}, [
    ...miradorImageToolsPlugin,
    miradorSharePlugin,
    miradorShareDialogPlugin,
    miradorDownloadPlugin,
    miradorDownloadDialogPlugin,
]);

