import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import MiradorDownload from 'mirador-dl-plugin';
import MiradorDownloadDialogPlugin from 'mirador-dl-plugin';
import miradorAnnotationPlugins from 'mirador-annotations/es/index';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';

const config = {
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  },
  id: 'demo',
  window: {
    defaultSideBarPanel: 'annotations',
  },
  windows: [{
    imageToolsEnabled: true,
    manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
  }],
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
  MiradorDownload.miradorDownloadPlugin,
  MiradorDownload.MiradorDownloadDialogPlugin,
  ...miradorAnnotationPlugins,
]);
