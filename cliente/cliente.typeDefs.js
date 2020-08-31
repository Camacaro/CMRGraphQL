
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, './schema'), { extensions: ['graphql'] });

module.exports = typesArray
