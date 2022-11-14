import { readdirSync } from 'fs';
import { join } from 'path';

export async function getWritingFiles() {
  return readdirSync(join(process.cwd(), 'src', 'contents', 'writings'));
}
