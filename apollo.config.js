const {API_BASE_URL} = require('./src/shared/constants');
const path = require('path');

module.exports = {
  client: {
    service: {
      name: API_BASE_URL,
      localSchemaFile: path.join(__dirname, '/.introspection.json'),
    },
    includes: ['./src/**/*.graphql'],
    excludes: ['./src/**/*.ts', './src/**/*.js'],
  },
};
