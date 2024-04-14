import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// 現在の日時を取得
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は 0 から始まるので +1 が必要
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

// ファイル名を生成 (yyyyMMddhhmm.md)
const fileName = `${year}${month}${day}${hours}${minutes}.md`;

const fileContent = `---
date: ${year}-${month}-${day}
category:
tag:
---`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// posts ディレクトリにファイルを書き込む
const filePath = path.join(rootDir, 'docs/posts', fileName);
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('ファイルを書き込めませんでした:', err);
  } else {
    console.log('ファイルを書き込みました:', filePath);
  }
});