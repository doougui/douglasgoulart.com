import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from 'components/Headings';
import { Link } from 'components/Link';
import { SyntaxHighlighter } from 'components/SyntaxHighlighter';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export const MDXComponents = {
  a: Link,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  pre: SyntaxHighlighter,
  LiteYouTubeEmbed,
};
