import { readdirSync } from 'fs';
import { join } from 'path';
import { ContentType } from './types';

export async function getFiles(type: ContentType) {
  return readdirSync(join(process.cwd(), 'src', 'contents', type));
}
