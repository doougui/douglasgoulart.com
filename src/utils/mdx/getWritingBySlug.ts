import { readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';

export async function getWritingBySlug(slug: string) {
  const source = readFileSync(
    join(process.cwd(), 'src', 'contents', 'writings', `${slug}.mdx`),
    'utf8',
  );

  const { code, frontmatter } = await bundleMDX({
    source,
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
