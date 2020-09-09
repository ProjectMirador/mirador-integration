import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import MiradorDownload from 'mirador-dl-plugin';
import MiradorDownloadDialogPlugin from 'mirador-dl-plugin';


const config = {
  id: 'demo',
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
]);
