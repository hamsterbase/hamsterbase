import { join } from 'path';
import { fork } from 'child_process';
import { resolveRoot } from './utils';
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

export async function createTestServer(options: RunServerOptions) {
  const token = `${Math.random()}`;
  try {
    await fs.rm(options.database, { recursive: true });
  } catch (error) {}
  await initToken(options.database, token);
  return new Promise<{
    endpoint: string;
    token: string;
    dispose: () => Promise<void>;
  }>((resolve) => {
    const mainServer = process.env.HAMSTER_BASE_SERVER || resolveRoot('src/server/main.js');
    const cp = fork(mainServer, ['--port', `${options.port}`], {
      stdio: 'pipe',
      env: {
        DATABASE_DIR: options.database,
        DOC_DIR: resolveRoot('src/docs'),
        WEB_RESOURCES: resolveRoot('src/web'),
        SIMPLE: resolveRoot('src/simple'),
      },
    });
    cp.stdout!.on('data', (data: string) => {
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
