import * as fs from 'fs';
import * as path from 'path';
import { camelCase } from 'change-case';

const src = fs.readFileSync(path.normalize('./src/components.d.ts')).toString();
const searchString = 'IntrinsicElements';
const searchStringPos = src.indexOf(searchString) + searchString.length;
const rawTags = src
  .substr(searchStringPos, src.indexOf('}', searchStringPos) - searchStringPos + 1)
  .replace(/[\s\n]/g, '')
  .replace(/(\w+);/g, '"$1",');

const rawJson = rawTags.slice(0, rawTags.lastIndexOf(',')) + '}';
const tags = Object.keys(JSON.parse(rawJson));

console.log(`Identified tags (${tags.length} total):\n${tags.map((x) => `  - ${x}`).join('\n')}`);

const file = path.normalize('./src/tags.ts');

fs.writeFileSync(
  file,
  `/* Auto Generated File */
export const TAG_NAMES = [${tags.map((x) => `'${x}'`).join(', ')}] as const;
export type TagName = typeof TAG_NAMES[number];

// TODO: replace with generic in TS4.1: https://stackoverflow.com/questions/57807009/typescript-generic-to-turn-underscore-object-to-camel-case
export type TagNameCamelCase = ${tags.map((x) => `'${camelCase(x)}'`).join(' | ')};
`
);
