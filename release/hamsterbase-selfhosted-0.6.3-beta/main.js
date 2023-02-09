const { fork } = require('child_process');
const { join } = require('path');

const server = join(__dirname, 'server/main.js');
const defaultHomeDir = join(require('os').homedir(), 'hamsterbase');
const defaultDatabase = join(defaultHomeDir, 'database');

const sqliteFtsExtensionPath = join(__dirname, 'extra', 'simple');

const defaultArgs = ['--data', defaultDatabase, '--resource-sqlite-fts-extension-path', sqliteFtsExtensionPath];

fork(server, defaultArgs.concat(process.argv.slice(2)));
