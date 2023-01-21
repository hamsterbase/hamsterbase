const { fork } = require('child_process');
const { join } = require('path');

const server = join(__dirname, 'server/main.js');
const currentDir = join(require('os').homedir(), 'hamsterbase');

fork(server, process.argv.slice(2), {
  env: {
    DATABASE_DIR: join(currentDir, 'database'),
    DOC_DIR: join(__dirname, 'docs'),
    WEB_RESOURCES: join(__dirname, 'web'),
    SIMPLE: join(__dirname, 'extra', 'simple'),
  },
});
