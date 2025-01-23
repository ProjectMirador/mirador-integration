const path = require('path');
const Mirador = require("mirador");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'packaged_mirador.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'PackagedMirador',
        publicPath: '/static/mirador/',
    }
};
