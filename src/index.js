import Mirador from 'mirador/dist/es/src/index';
import annotationPlugins from 'mirador-annotations';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';

const config = {
  id: 'demo',
    catalog: [
        { manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest' },
        { manifestId: 'https://files.tetras-libre.fr/dev/Clock/manifest.json'}
    ],
  theme: {
    palette: {
      primary: {
        main: '#6e8678',
      },
    },
  },
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
    // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
    exportLocalStorageAnnotations: false, // display annotation JSON export button
  },
};

Mirador.viewer(config, [
  ...annotationPlugins,
]);
