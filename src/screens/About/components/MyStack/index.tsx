import { Heading2, Heading3 } from 'components/Headings';
import { Stack } from 'components/Stack';
import { Tool, ToolProps } from 'components/Tool';
import * as S from './styles';

export function MyStack() {
  const tools: ToolProps[] = [
    { color: '#E34F26', name: 'HTML5' },
    { color: '#1572B6', name: 'CSS3' },
    { color: '#F7E018', name: 'JavaScript' },
    { color: '#2D79C7', name: 'TypeScript' },
    { color: '#80D8F7', name: 'React.js' },
    { color: '#FFFFFF', name: 'Next.js' },
    { color: '#61DAFB', name: 'React Native' },
    { color: '#80BD00', name: 'Node.js' },
    { color: '#333331', name: 'Express.js' },
  ];

  const ecosystem: ToolProps[] = [
    { color: '#5C49EB', name: 'Expo' },
    { color: '#4B32C3', name: 'ESLint' },
    { color: '#F8BC45', name: 'Prettier' },
    { color: '#C21325', name: 'Jest' },
    { color: '#709916', name: 'Vitest' },
    { color: '#FE4646', name: 'Testing Library' },
    { color: '#059DFD', name: 'Storybook' },
    { color: '#F05033', name: 'Git' },
    { color: '#FFFFFF', name: 'Figma' },
    { color: '#FFFF00', name: 'Linux' },
  ];

  return (
    <Stack as="section" spacing="3rem">
      <div>
        <Heading2>My stack</Heading2>

        <S.Tools>
          {tools.map((tool) => (
            <Tool key={tool.name} {...tool} />
          ))}
        </S.Tools>
      </div>

      <div>
        <Heading3>Ecosystem</Heading3>

        <S.Tools>
          {ecosystem.map((tool) => (
            <Tool key={tool.name} {...tool} />
          ))}
        </S.Tools>
      </div>
    </Stack>
  );
}
