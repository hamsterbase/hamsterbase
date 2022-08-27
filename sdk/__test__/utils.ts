import fs from 'fs/promises';
import path from 'path';

export const enum Fixtures {
  HamsterBaseDocument_01_mht = '001.mht',
  HamsterBaseGithubIssue_02_webarchive = '002.webarchive',
  HamsterBaseGithubHome_03_html = '003.html',
}

export const enum FixturesId {
  HamsterBaseDocument_01_mht = 'bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f',
  HamsterBaseGithubIssue_02_webarchive = 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
  HamsterBaseGithubHome_03_html = 'd4a1267d1f8a8eeb20d7b4b86a9d91839809e083ceb42366847ed5ed3a6cf254',
}

export function getBase64Fixture(fixtureName: Fixtures): Promise<string> {
  return fs.readFile(path.join(__dirname, 'fixtures', fixtureName), 'base64');
}

export function resolveFixture(fixtureName: string) {
  return path.resolve(__dirname, 'fixtures', fixtureName);
}

export function resolveRoot(relativePath: string) {
  return path.resolve(__dirname, '../..', relativePath);
}

export function resolveBetaFile(relativePath: string) {
  return path.resolve(resolveRoot('beta'), relativePath);
}

export function getPort() {
  return Math.floor(Math.random() * 4000) + 5000;
}
