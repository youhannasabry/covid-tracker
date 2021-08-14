// get current env mode
/*eslint-disable*/
const env = process.env.NODE_ENV || 'development';
const envConfig = require('./env.json');
console.log('ENV', env)
// get only the configuration of the current mode
const config = envConfig[env];

// add env to config
config.env = env;

// expose config globally
global.serverConfig = config;

export default config;
