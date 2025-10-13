// Import Mirador from node_modules
import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { miradorSharePlugin, miradorShareDialogPlugin } from 'mirador-share-plugin';
import AnotherCustomMenuItem from './AnotherCustomMenuItem.jsx';
import CustomMenuItem from './CustomMenuItem.jsx';
import CustomMenuComponent from './CustomMenuComponent.jsx';

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
    {...miradorSharePlugin, target: 'CustomMenuComponent' },
    miradorShareDialogPlugin,
    AnotherCustomMenuItem,
    CustomMenuItem,
    CustomMenuComponent,
]);

