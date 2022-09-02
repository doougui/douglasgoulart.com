import { SectionTitle } from 'components/SectionTitle';
import { Tool, ToolProps } from 'components/Tool';
import * as S from './styles';

export function MyStack() {
  const tools: ToolProps[] = [
    { color: '#E34F26', name: 'HTML5' },
    { color: '#1572B6', name: 'CSS3' },
    { color: '#F7E018', name: 'JavaScript' },
    { color: '#2D79C7', name: 'TypeScript' },
    { color: '#80D8F7', name: 'React.js' },
    { color: '#61DAFB', name: 'React Native' },
  ];

  return (
    <S.Container>
      <SectionTitle>My stack</SectionTitle>

      <S.Tools>
        {tools.map((tool) => (
          <Tool key={tool.name} {...tool} />
        ))}
      </S.Tools>
    </S.Container>
  );
}
