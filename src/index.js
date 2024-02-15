import Mirador from 'mirador/dist/es/src/index';
import annotationPlugins from 'mirador-annotation-editor';
import LocalStorageAdapter from 'mirador-annotation-editor/es/LocalStorageAdapter';

const config = {
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
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
    // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
    exportLocalStorageAnnotations: false, // display annotation JSON export button
  },
};

Mirador.viewer(config, [
  ...annotationPlugins,
]);
