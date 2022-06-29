import fs from 'fs/promises';
import path from 'path';

export const enum Fixtures {
  HamsterBaseDocument = '001.mht',
  HamsterBaseGithubIssue = '002.webarchive',
  HamsterBaseGithubHome = '003.html',
}

export function getBase64Fixture(fixtureName: Fixtures): Promise<string> {
  return fs.readFile(path.join(__dirname, 'fixtures', fixtureName), 'base64');
}

export function resolveRoot(relativePath: string) {
  return path.resolve(__dirname, '../..', relativePath);
}

export function getPort() {
  return Math.floor(Math.random() * 1000) + 5000;
}
