import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import * as S from './styles';

type SyntaxHighlighterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

type CodeType = {
  props: {
    children: string;
    className: string;
  };
};

export function SyntaxHighlighter({ children }: SyntaxHighlighterProps) {
  if (!children) return null;

  const code = (children as CodeType).props.children;

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <S.Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </S.Pre>
      )}
    </Highlight>
  );
  return null;
}
