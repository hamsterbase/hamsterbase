import { join } from 'path';
import { fork } from 'child_process';
import { resolveBetaFile, resolveFixture, resolveRoot } from './utils';
import fs from 'fs/promises';

interface RunServerOptions {
  port: number;
  database: string;
}

async function initToken(database: string, token: string) {
  await fs.mkdir(join(database, 'config'), { recursive: true });
  const tokenPath = join(database, 'config/token.json');
  await fs.writeFile(
    tokenPath,
    JSON.stringify({
      token: [
        {
          label: 'test',
          token: token,
          createdAt: Date.now(),
        },
      ],
    })
  );
}

export async function initCache(database: string) {
  await fs.mkdir(join(database, 'cache', 'webpage-parser'), { recursive: true });
  await fs.cp(resolveFixture('webpage-parser'), join(database, 'cache', 'webpage-parser'), { recursive: true });
}

export async function createTestServer(options: RunServerOptions) {
  const token = `${Math.random()}`;
  try {
    await fs.rm(options.database, { recursive: true });
  } catch (error) {}
  await initToken(options.database, token);
  await initCache(options.database);
  return new Promise<{
    endpoint: string;
    token: string;
    dispose: () => Promise<void>;
  }>((resolve) => {
    const mainServer = process.env.HAMSTER_BASE_SERVER || resolveBetaFile('server/main.js');
    const cp = fork(mainServer, ['--port', `${options.port}`], {
      stdio: 'pipe',
      env: {
        DATABASE_DIR: options.database,
        DOC_DIR: resolveBetaFile('docs'),
        WEB_RESOURCES: resolveRoot('web'),
        SIMPLE: resolveRoot('release/simple'),
      },
    });
    cp.stderr!.on('data', (data) => {
      // console.log(data.toString());
    });
    cp.stdout!.on('data', (data: string) => {
      // console.log('data', data.toString());
      if (data.toString().includes('Hamsterbase has started at')) {
        resolve({
          endpoint: `http://localhost:${options.port}`,
          token,
          dispose: async () => {
            cp.kill();
            await fs.rm(options.database, { recursive: true });
          },
        });
      }
    });
  });
}
