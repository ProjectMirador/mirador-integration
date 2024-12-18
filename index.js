// Import Mirador from node_modules
import Mirador from 'mirador';
// TODO: add plugin back once the plugin is on M4
// import { miradorImageToolsPlugin } from 'mirador-image-tools';
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
});